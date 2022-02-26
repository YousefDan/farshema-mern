const router = require("express").Router();
const { Order , validateOrder } = require("../models/Order");
const asyncHandler = require("express-async-handler");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorize,
} = require("../middlewares/verifyToken");

/**
 *  @desc    Create new order
 *  @route   /api/order
 *  @access  private only authenticate (registered user)
 *  @method  POST
 */
router.post(
  "/",
  verifyToken,
  asyncHandler(async (req, res) => {
    const { error } = validateOrder(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const newOrder = new Order(req.body);
    const result = await newOrder.save();
    res.status(201).send(result);
  })
);

/**
 *  @desc    Update order
 *  @route   /api/order/:id
 *  @access  private only admin
 *  @method  PUT
 */
router.put(
  "/:id",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedOrder);
  })
);

/**
 *  @desc    Delete order
 *  @route   /api/order/:id
 *  @access  private only admin
 *  @method  DELETE
 */
router.delete(
  "/:id",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).send("order has been deleted");
  })
);

/**
 *  @desc    Get user orders
 *  @route   /api/order/:userId
 *  @access  private only admin and the owner of the order
 *  @method  GET
 */
router.get(
  "/:userId",
  verifyTokenAndAuthorize,
  asyncHandler(async (req, res) => {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).send(orders);
  })
);

/**
 *  @desc    Get all orders
 *  @route   /api/order
 *  @access  private only admin
 *  @method  GET
 */
router.get(
  "/",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    const orders = await Order.find();
    res.status(200).send(orders);
  })
);

module.exports = router;
