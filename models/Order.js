const mongoose = require("mongoose");
const joi = require("joi");

/* Order Schema */
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timeseries: true }
);

/* Order Model */
const Order = mongoose.model("Order", OrderSchema);

// validate order
function validateOrder(obj) {
  const schema = joi.object({
    userId: joi.string().trim().required(),
    products: joi.array().required(),
    amount: joi.number().required(),
    address: joi.object().required(),
    status: joi.string()
  });
  return schema.validate(obj);
}

module.exports = {
  Order,
  validateOrder
};