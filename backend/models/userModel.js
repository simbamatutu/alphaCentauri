import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import Course from './courseModel.js';
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    loginName: {
      type: String,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
    },

    about: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    numberofCourseCreated: {
      type: Number,
      default: 0,
    },
    numberofCourseEnrolled: {
      type: Number,
      default: 0,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: Boolean,
    },
    coursesCreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      },
    ],

    coursesEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],

    coursesTaught: {
      type: [Course.schema],
    },
    studentNumber: {
      type: String,
    },
    enrolledCourses: {
      type: [Course.schema],
    },
    teacherNumber: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
    isTeacher: {
      type: Boolean,
      default: false,
      required: true,
    },
    isStudent: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
export default User;
