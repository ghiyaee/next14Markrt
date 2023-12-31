'use server';
import User from '@/models/User';
import bcrypt from 'bcrypt';
const saltRounds = 10;
async function handelRegister(data) {
  const password = await bcrypt.hash(data.password, saltRounds);
  try {
    const checkEmail = await User.findOne({ email: data.email });
    if (!checkEmail) {
      const newUser = new User({
        name:data.name,
        email:data.email,
        password:password,
      });
      await newUser.save();
      return {
        success:'ثبت نام انجام شد'
      }
    } else {
      return {
        error: 'این ایمیل قبلا وارد شده',
      };
    }
  } catch (error) {
    console.error('error', error);
  }
}
export default handelRegister;
