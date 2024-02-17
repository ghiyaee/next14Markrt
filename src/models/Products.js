import mongoose from 'mongoose'
const productsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    img:[ { type: String, required: true }],
    brand: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    purchased: { type: Number, default: 0 },
    rating: { type: Number, required: true },
    numReviews: { type: Number, default: 0 },
    like: { type: Number, default: 0 },
    disLike: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);
mongoose.models = {};
const Product = mongoose.model('Product', productsSchema);
export default Product;
