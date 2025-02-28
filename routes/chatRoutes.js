const express = require("express");
const Message = require("../models/Message");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.get("/history/:room", authMiddleware, async (req, res) => {
    try {
        const messages = await Message.aggregate([
            { $match: { room: req.params.room } }, // Filter by room
            { $sort: { timestamp: 1 } }, // Sort messages oldest to newest
            {
                $lookup: {
                    from: "users", // MongoDB collection name
                    localField: "sender",
                    foreignField: "_id",
                    as: "senderInfo",
                },
            },
            {
                $unwind: "$senderInfo", // Convert array to object
            },
            {
                $project: {
                    sender: "$senderInfo.name", // Get sender name
                    message: 1,
                    timestamp: 1,
                },
            },
        ]);

        res.json(messages);
    } catch (error) {
        console.error("Error fetching chat history:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
