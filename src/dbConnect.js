const mongoose = require('mongoose');
async function dbConnect() {
  try {
    if (!process.env.MONGOURL)
      console.log('Failed to read environment variables');
    await mongoose.connect(process.env.LOCAL);
    console.log('connect db');
  } catch (error) {
    console.error('error connect to db', error);
  }
}
module.exports = dbConnect;
