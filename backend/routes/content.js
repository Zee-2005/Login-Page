const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message:"You're successsfully Logged In... From Content Page" });
})

module.exports = router;