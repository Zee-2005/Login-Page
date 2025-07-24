const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("You're successsfully Logged In...");
})

module.exports = router;