import mongoose from 'mongoose';
import User from '@/models/user.js';
import Product from '@/models/products.js';
const schemaComment = new mongoose.Schema(
  {
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    like: { type: Number, default: 0 },
    disLike: { type: Number, default: 0 },
    show_comment: { type: Boolean, default: false },
  },
  { timestamps: true }
);
mongoose.models = {};
const Comment = mongoose.model('Comment', schemaComment);
export default Comment;
