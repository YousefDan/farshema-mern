const mongoose = require("mongoose");
const joi = require("joi");

// User Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  { timestamps: true }
);
// User Model
const User = mongoose.model("User", userSchema);

// validate user
function validateUser(obj) {
  const schema = joi.object({
    username: joi.string().trim().min(2).required(),
    email: joi.string().trim().min(5).required().email(),
    password: joi.string().trim().min(8).required(),
    isAdmin: joi.boolean(),
  });
  return schema.validate(obj);
}

// validate Login user
function validateLoginUser(obj) {
  const schema = joi.object({
    username: joi.string().trim().min(2).required(),
    password: joi.string().trim().min(8).required(),
  });
  return schema.validate(obj);
}

// validate Update user
function validateUpdateUser(obj) {
  const schema = joi.object({
    username: joi.string().trim().min(2),
    email: joi.string().trim().min(5).email(),
    password: joi.string().trim().min(8),
    isAdmin: joi.boolean(),
  });
  return schema.validate(obj);
}

module.exports = {
  User,
  validateUser,
  validateLoginUser,
  validateUpdateUser
};
