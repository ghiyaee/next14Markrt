import mongoose from 'mongoose';
import User from './user';
const schemaAddress = new mongoose.Schema({
  ostan: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  codePost: { type: Number, required: true },
  tell: { type: Number, required: true },
  mobile: { type: Number, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
mongoose.models = {};
const Address = mongoose.model('Address', schemaAddress);
export default Address;
