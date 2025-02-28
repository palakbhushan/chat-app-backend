require('dotenv').config();
const express = require('express');
const http = require("http");
const connectMongoDB = require('./config/mongoConnection');
const { connectPostgres } = require('./config/postgresConnection');
const redisClient = require('./config/redis');
const morgan = require("morgan");
const initializeSocket = require("./websocket/chatSocket");

const app = express();
const server = http.createServer(app);
initializeSocket(server);
const PORT = process.env.PORT || 5000;


connectMongoDB();
// connectPostgres();

// Middleware
app.use(express.json());
app.use(require('cors')());
app.use(morgan("dev"))
app.use("/api/", require("./routes"));


// Start Server
server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
