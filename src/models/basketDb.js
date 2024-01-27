import mongoose from "mongoose";
import User from "./user";
import Product from "./products";
const schemaBasket = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId,ref:'User' },
    product_id: { type: mongoose.Schema.Types.ObjectId,ref:'Product' },
    quantity: { type: Number }
  },
  { timestamps: true }
);

mongoose.models = {}
const BasketDb = mongoose.model('BasketDb', schemaBasket);
export default BasketDb