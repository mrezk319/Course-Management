const Course = require("../Models/courseModel");
const getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find();

    if (allCourses.length > 0) {
      res.status(200).json({ success: true, payload: allCourses });
    } else {
      res
        .status(404)
        .json({ success: false, payload: { errMsg: "No courses yet!" } });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, payload: { errMsg: error.message } });
  }
};
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (course) {
      res.status(200).json({ success: true, payload: course });
    } else {
      res
        .status(404)
        .json({ success: false, payload: { errMsg: "No course found!" } });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, payload: { errMsg: error.message } });
  }
};
const addNewCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(200).json({ success: true, payload: course });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, payload: { errMsg: error.message } });
  }
};
const updateCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (course) {
      await Course.create(Object.assign(course, req.body));
      res.status(200).json({
        success: true,
        payload: {
          message: "Course Updated Successfully!",
        },
      });
    } else {
      res
        .status(404)
        .json({ success: false, payload: { errMsg: "No course found!" } });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, payload: { errMsg: error.message } });
  }
};
const deleteCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, payload: { errMsg: "No Course Found!" } });
    }
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      payload: {
        message: "Course deleted successfully!",
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, payload: { errMsg: error.message } });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  addNewCourse,
  updateCourseById,
  deleteCourseById,
};
