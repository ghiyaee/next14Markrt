import mongoose from "mongoose";
export default async function dbConnect(){
  await mongoose.connect(process.env.MONGOURL, {
  });
  console.log('connect db');
}