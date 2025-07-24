const express = require("express");
const { signUpHandler, loginHandler } = require("../controller/user")
const router = express.Router();

router.post("/signup", signUpHandler);
router.post("/login", loginHandler);


module.exports = router;