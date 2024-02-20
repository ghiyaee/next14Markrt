import mongoose from 'mongoose';
const schemaCounter = new mongoose.Schema({
  _id: { type: String },
  counter: { type: Number, default: 0 },
});

const Counter = mongoose.model('Counter', schemaCounter);
export default Counter;
