const mongoose = require("mongoose");
const joi = require("joi");

// Product Schema
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
    price: {
      type: Number,
      required: true,
      min: 200000,
    },
    img: {
      type: String,
      default: "",
      required: false,
    },
  },
  { timestamps: true }
);
// Product Model
const Product = mongoose.model("Product", productSchema);

// validate product
function validateProduct(obj) {
  const schema = joi.object({
    title: joi.string().trim().min(10).required(),
    price: joi.number().min(200000).required(),
    img: joi.string(),
  });
  return schema.validate(obj);
}

// validate updated product
function validateUpdatedProduct(obj) {
  const schema = joi.object({
    title: joi.string().trim().min(10),
    price: joi.number().min(200000),
    img: joi.string(),
    _id: joi.string(),
  });
  return schema.validate(obj);
}

module.exports = {
  Product,
  validateProduct,
  validateUpdatedProduct,
};
