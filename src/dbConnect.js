import mongoose from "mongoose";
export default async function dbConnect(){
  await mongoose.connect(process.env.LOCAL, {
    serverSelectionTimeoutMS: 20000,
  });
  console.log('connect db');
}