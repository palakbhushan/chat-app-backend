const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { body } = require("express-validator");

const router = express.Router();

router.post(
    "/register",
    [
        body("name").not().isEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Invalid email"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    ],
    registerUser
);

router.post(
    "/login",
    [
        body("email").isEmail().withMessage("Invalid email"),
        body("password").not().isEmpty().withMessage("Password is required"),
    ],
    loginUser
);

module.exports = router;
