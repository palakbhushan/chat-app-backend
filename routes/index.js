const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const chatRoutes = require("./chatRoutes");


router.use("/auth", authRoutes);
router.use("/chat", chatRoutes);

module.exports = router;
