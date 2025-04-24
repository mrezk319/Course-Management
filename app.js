const express = require("express");
const courseRouter = require("./Routes/courseRoutes");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/courses", courseRouter);

module.exports = app;
