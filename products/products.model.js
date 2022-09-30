const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
