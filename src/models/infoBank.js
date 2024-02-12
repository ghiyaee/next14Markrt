import mongoose from "mongoose";
import User from "./user";
const infoBankSchema = new mongoose.Schema(
  {
    input1: { type: Number, default: 1111 },
    input2: { type: Number, default: 1111 },
    input3: { type: Number, default: 1111 },
    input4: { type: Number, default: 1111 },
    input5: { type: Number, default: 1111 },
    input6: { type: Number, default: 11 },
    input7: { type: Number, default: 11 },
    input8: { type: Number, default: 111111 },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    cash: { type: Number, default: 300000000 },
  },
  {
    timestamps: true,
  }
);
const InfoBank = mongoose.model('InfoBank', infoBankSchema);
export default InfoBank