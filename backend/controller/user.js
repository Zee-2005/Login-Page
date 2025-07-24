const mongoose = require("mongoose");
const USER = require("../model/user");
const bcrypt = require("bcryptjs");


async function signUpHandler(req, res) {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        // Check if user already exists
        const existingUser = await USER.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "User already exists" });
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new USER({ name, email, password: hashedPassword });
        await user.save();
        return res.status(201).render("login");
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}


async function loginHandler(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const user = await USER.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        // In production, generate a JWT token here and return it
        return res.json({ message: "Successfully logged in" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    signUpHandler,
    loginHandler
};