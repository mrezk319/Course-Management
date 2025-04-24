const express = require("express");
const courseController = require("../Controller/courseControllers");
const router = express.Router();

router
  .route("/")
  .get(courseController.getAllCourses)
  .post(courseController.addNewCourse);
  router
  .route("/:id")
  .get(courseController.getCourseById)
  .put(courseController.updateCourseById)
  .delete(courseController.deleteCourseById);

module.exports = router;
