const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Message = require("../models/Message"); // Import Message model

const setupWebSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*", // Allow all clients (update for production)
            methods: ["GET", "POST"],
        },
    });

    // WebSocket Authentication Middleware
    io.use(async (socket, next) => {
        try {
            const token = socket.handshake.query.token; // Get token from client
            if (!token) {
                console.error("❌ No token provided");
                return next(new Error("Authentication error: No token"));
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
            const user = await User.findById(decoded.id);

            if (!user) {
                console.error("❌ User not found");
                return next(new Error("Authentication error: User not found"));
            }

            socket.user = user;
            next();
        } catch (error) {
            console.error("❌ Socket authentication error:", error.message);
            return next(new Error("Authentication error"));
        }
    });

    // WebSocket Connection
    io.on("connection", (socket) => {
        console.log(`🔗 User connected: ${socket.user.name} (${socket.user._id})`);

        socket.on("joinRoom", (room) => {
            socket.join(room);
            console.log(`👥 ${socket.user.name} joined room: ${room}`);
        });

        socket.on("sendMessage", async ({ room, message }) => {
            try {
                if (!message || !room) {
                    console.error("❌ Missing message or room");
                    return;
                }

                const newMessage = new Message({
                    sender: socket.user._id,
                    room,
                    message,
                });

                await newMessage.save();

                // Broadcast message to room
                io.to(room).emit("newMessage", {
                    sender: { id: socket.user._id, name: socket.user.name },
                    message,
                    timestamp: newMessage.timestamp,
                });

            } catch (error) {
                console.error("❌ Error sending message:", error.message);
            }
        });

        // Disconnect Event
        socket.on("disconnect", () => {
            if (socket.user) {
                console.log(`❌ User disconnected: ${socket.user.name}`);
            } else {
                console.log("❌ Unknown user disconnected");
            }
        });
    });
};

module.exports = setupWebSocket;
