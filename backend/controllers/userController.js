import express from 'express';
import asyncHandler from 'express-async-handler';

import generateTokenfrom from '../utils/generateToken.js';

import User from '../models/userModel.js';

// @desc Auth users and get token
// @route POST /api/tea chers/login
// @access public
const authUser = asyncHandler(async (req, res) => {
  const { loginName, password } = req.body;
  const user = await User.findOne({ loginName });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateTokenfrom(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password!');
  }
});

// @desc Regster new user
// @route POST /api/user
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, loginName, password } = req.body;
  const userExists = await User.findOne({ loginName });

  if (userExists) {
    res.status(400);
    throw new Error('User already exist!');
  }

  const user = await User.create({
    name,
    email,
    loginName,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      loginName: user.loginName,
      isTeacher: user.isTeacher,
      isStudent: user.isStudent,
      token: generateTokenfrom(user._id),
    });
  } else {
    res.status(400);
    throw new error('Invalid user data');
  }
});

// @desc get logged in profile
// @route GET /api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      loginName: user.loginName,
      isTeacher: user.isTeacher,
      isStudent: user.isStudent,
    });
  } else {
    res.status(404);
    throw new error('User Not Found');
  }
});

// @desc update user Profile
// @route PUT /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.loginName = req.body.loginName || user.loginName;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      loginName: updatedUser.loginName,
      isAdmin: updatedUser.isAdmin,
      token: generateTokenfrom(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new error('User Not Found');
  }
});
export { authUser, getUserProfile, registerUser, updateUserProfile };
