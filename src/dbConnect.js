import mongoose from "mongoose";
export default async function dbConnect(){
  await mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: 'true',
    useUnifiedTopology: 'true',
  });
  console.log('connect db');
}