const express = require("express");
const courseRouter = require("./Routes/courseRoutes");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/courses", courseRouter);

mongoose
  .connect(process.env.DATABASE)
  .then((val) => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.error("DB connection error:", err.message);
  });

module.exports = app;
