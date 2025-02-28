const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        room: { type: String, required: true },
        message: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
