const router = require("express").Router();
const _ = require("lodash");
const asyncHandler = require("express-async-handler");
const {
  Product,
  validateProduct,
  validateUpdatedProduct,
} = require("../models/Product");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

/**
 *  @desc    Create a new product
 *  @route   /api/products
 *  @access  private only admin
 *  @method  POST
 */
router.post(
  "/",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    const { error } = validateProduct(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const product = new Product(
      _.pick(req.body, ["title", "price", "features", "img", "category"])
    );

    const result = await product.save();

    res
      .status(201)
      .send(
        _.pick(result, ["_id", "title", "price", "features", "category", "img"])
      );
  })
);

/**
 *  @desc    Get all products
 *  @route   /api/products
 *  @access  public
 *  @method  GET
 */
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const { title, category, price } = req.query;
    let products;

    if (title) {
      products = await Product.find({ title }).select(
        "-updatedAt -createdAt -__v"
      );
    } else if (category) {
      products = await Product.find({ category }).select(
        "-updatedAt -createdAt -__v"
      );
    } else if (price) {
      products = await Product.find({ price: { $lte: price } }).select(
        "-updatedAt -createdAt -__v"
      );
    } else {
      products = await Product.find().select("-updatedAt -createdAt -__v");
    }

    res.status(200).send(products);
  })
);

/**
 *  @desc    Get single product
 *  @route   /api/products/:id
 *  @access  public
 *  @method  GET
 */
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).select(
      "-updatedAt -createdAt -__v"
    );
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send("product not found");
    }
  })
);

/**
 *  @desc    Update product
 *  @route   /api/products/:id
 *  @access  private only admin
 *  @method  PUT
 */
router.put(
  "/:id",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    const { error } = validateUpdatedProduct(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const result = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res
      .status(200)
      .send(
        _.pick(result, ["_id", "title", "price", "features", "img", "category"])
      );
  })
);

/**
 *  @desc    Delete product
 *  @route   /api/products/:id
 *  @access  private only admin
 *  @method  DELETE
 */
router.delete(
  "/:id",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    await Product.findByIdAndRemove(req.params.id);
    res.status(200).send("product has been deleted");
  })
);
module.exports = router;
