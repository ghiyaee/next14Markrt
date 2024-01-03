import mongoose from 'mongoose';
export default async function dbConnect() {
  try {
    if (!process.env.MONGOURL)
      console.log('Failed to read environment variables');
    await mongoose.connect(process.env.MONGOURL);
    console.log('connect db');
  } catch (error) {
    log.error('error connect to db', error);
  }
}
