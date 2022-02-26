const router = require("express").Router();
const bcrypt = require("bcrypt");
const _ = require("lodash");
const asyncHandler = require("express-async-handler");
const { User } = require("../models/User");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorize,
} = require("../middlewares/verifyToken");
const { validateUpdateUser } = require("../models/User");

/**
 *  @desc    Get all users
 *  @route   /api/users
 *  @access  private only admin
 *  @method  GET
 */
router.get(
  "/",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    const users = await User.find().select("-password -__v");
    res.status(200).send(users);
  })
);
/**
 *  @desc    Get single user
 *  @route   /api/users/:id
 *  @access  private only admin or user himself
 *  @method  GET
 */
router.get(
  "/:id",
  verifyTokenAndAuthorize,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select("-password -__v");
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send("user not found");
    }
  })
);

/**
 *  @desc    Update user
 *  @route   /api/users/:id
 *  @access  private only admin or user himself
 *  @method  PUT
 */
router.put(
  "/:id",
  verifyTokenAndAuthorize,
  asyncHandler(async (req, res) => {
    const { error } = validateUpdateUser(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const result = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res
      .status(200)
      .send(
        _.pick(result, [
          "username",
          "email",
          "createdAt",
          "updatedAt",
          "isAdmin",
          "_id",
        ])
      );
  })
);

/**
 *  @desc    Delete user
 *  @route   /api/users/:id
 *  @access  private only admin or user himself
 *  @method  DELETE
 */
router.delete(
  "/:id",
  verifyTokenAndAuthorize,
  asyncHandler(async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.status(200).send("user has been deleted");
  })
);
module.exports = router;
