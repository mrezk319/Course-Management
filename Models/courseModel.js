const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title field is required"],
    },
    description: {
      type: String,
      required: [true, "Description field is required"],
    },
    startDate: { type: Date, required: false },
    endDate: { type: Date, required: false },
    image: String,
    price: {
      type: Number,
      required: [true, "Price field is required"],
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
