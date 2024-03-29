'use server';
import User from '@/models/user.js';
import Address from '@/models/addressUser';
import BasketDb from '@/models/basketDb';
import bcrypt from 'bcrypt';
const saltRounds = 10;
async function handelLogin(data) {
  try {
    const checkEmail = await User.findOne({ email: data.email });
    const checkBasketDb = await BasketDb.find({
      $and: [{ user_id: checkEmail._id }, { status: false }],
    }).populate(['user_id', 'product_id']);
  
    const password = await bcrypt.compare(data.password, checkEmail.password);
    if (checkEmail.email === data.email && password) {
      return {
        resulteEmail: JSON.parse(JSON.stringify(checkEmail)),
        resulteBasket: JSON.parse(JSON.stringify(checkBasketDb)),
      };
    } else {
      return { msgError: 'ایمیل یا رمز عبور اشتباه است' };
    }
  } catch (error) {
    console.error('error', error);
  }
}
export default handelLogin;
