const express = require("express");
const cors = require("cors");
const mongoConnect = require("./db");
const path = require("path");
const staticRoute = require("./routes/static");
const authRoute = require("./routes/auth");
const contentRoute = require("./routes/content");
const authenticateToken = require("./middleware/auth")
const app = express();
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/login";
mongoConnect(MONGO_URI);

app.set("view engine", "ejs");
app.use(express.static(path.resolve("./public")));
app.use(express.static(path.resolve("./views")));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", staticRoute);
app.use("/user", authRoute);
app.use("/content",authenticateToken, contentRoute);

app.listen(process.env.PORT || 8000, () => console.log(`http://localhost:${process.env.PORT}`));