import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
});

const productSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    require: true,
    default: 0,
  },
  price: {
    type: Number,
    require: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    require: true,
    default: 0,
  },
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema)
export default Product;