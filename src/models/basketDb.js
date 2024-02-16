import mongoose from 'mongoose';
import User from './user';
import Product from './products';
const schemaBasket = new mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    quantity: { type: Number, default: 1 },
    tax: { type: Number, default: 0 },
    productTotal: { type: Number, default: 0 },
    status: { type: Boolean, default: false },
    orderData: { type: Date, default: Date.now },
    sending: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const BasketDb = mongoose.model('BasketDb', schemaBasket);
export default BasketDb;
