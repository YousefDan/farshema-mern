const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const asyncHandler = require("express-async-handler");
const { validateUser, User, validateLoginUser } = require("../models/User");

/**
 *  @desc   Register a new user
 *  @route  /api/auth/register
 *  @access public
 *  @method POST
 */
router.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(400).send("this user already registered");
    }

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    user = new User(
      _.pick(req.body, ["username", "email", "password", "isAdmin"])
    );

    await user.save();

    const token = jwt.sign(
      { _id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    res.status(201).send({
      ..._.pick(user, ["username", "email", "_id", "createdAt"]),
      token,
    });
  })
);

/**
 *  @desc   Login user
 *  @route  /api/auth/login
 *  @access public
 *  @method POST
 */
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { error } = validateLoginUser(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).send("invalid username or password");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).send("invalid username or password");
    }

    const token = jwt.sign(
      { _id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    res.status(200).send({
      ..._.pick(user, ["username", "email", "_id", "createdAt"]),
      token,
    });
  })
);

module.exports = router;
