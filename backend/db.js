const mongoose = require("mongoose");

async function mongoConnect(MONGO_URI) {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected...");
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    }
}

module.exports = mongoConnect;