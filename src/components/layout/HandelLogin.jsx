'use server';
import User from '@/models/user.js';
import bcrypt from 'bcrypt';
const saltRounds = 10;
async function handelLogin(data) {
  try {
    const checkEmail = await User.findOne({ email: data.email });
    const password = await bcrypt.compare(data.password, checkEmail.password);
    if (checkEmail.email === data.email && password) {
      return {res: JSON.parse(JSON.stringify(checkEmail))};
    } else {
      return { msgError: 'ایمیل یا رمز عبور اشتباه است' };
    }
  } catch (error) {
    console.error('error', error);
  }
}

export default handelLogin;


