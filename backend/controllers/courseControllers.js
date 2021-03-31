import express from 'express';
import asyncHandler from 'express-async-handler';
import Course from '../models/courseModel.js';

// @desc Fetch app all Courses
// @route GET /api/courses
// @access public
const getCourses = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        courseName: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};
  const courses = await Course.find({ ...keyword });
  res.json(courses);
});

// @desc Fetch app course
// @route GET /api/courses:id
// @access public
const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404);
    throw new Error('Coures  not found');
  }

  res.json(courses);
});

// @desc delete course
// @route GET /api/courses/:id
// @access private/Admin
const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (course) {
    await course.remove();
    res.json({ message: 'Course Successfully Deleted' });
  } else {
    res.status(404);
    throw new error('Course not found!');
  }
});
// @desc create new course
// @route POST /api/courses
// @access private teacher/admin
const createCourse = asyncHandler(async (req, res) => {
  const course = new Course({
    courseName: 'sample name',
    level: 0,
    courseImage: 'upload image',
    school: 0,
  });
  const createdCourse = await course.save();
  res.status(201).json(createdCourse);
});

// @desc update course
// @route PUT /api/courses/:id
// @access private teacher/admin
const updateCourse = asyncHandler(async (req, res) => {
  const { courseName, level, school, courseImage } = req.body;
  const course = await Course.findById(req.params.id);

  if (course) {
    course.courseName = courseName;
    course.level = level;
    course.school = school;
    course.courseImage = courseImage;

    const updatedCourse = await course.save();
    res.json(course);
  } else {
    res.status(404);
    throw new Error('Course not found!');
  }
});

export { getCourseById, getCourses, deleteCourse, updateCourse, createCourse };
