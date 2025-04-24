const express = require("express");
const mongoose = require("mongoose");
const courseRouter = require("./Routes/courseRoutes");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Curse Management Api!" });
});
app.use("/api/courses", courseRouter);

let isConnected = false;

const dbWork = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.DATABASE);
    isConnected = true;
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("DB connection error:", err.message);
  }
};
dbWork();

app.listen(process.env.PORT, () => {
  console.log("Server Worked..");
});
