'use server';
import User from '@/models/User';
import bcrypt from 'bcrypt';
const saltRounds = 10;
async function handelLogin(data) {
  try {
    const checkEmail = await User.findOne({ email: data.email });
    const password = await bcrypt.compare(data.password, checkEmail.password);
    if (checkEmail.email === data.email && password) {
      return { res: checkEmail?.name };
    } else {
      return { msgError: 'ایمیل یا رمز عبور اشتباه است' };
    }
  } catch (error) {
    console.error('error', error);
  }
}

export default handelLogin;

//  async function handelLogin(data) {
//    let password = data.get('password')?.valueOf();
//    let success = false;
//    try {
//      const user = await User.findOne({ email: email });
//      if (user.email === email) {
//        if (bcrypt.compare(user.password, password)) success = true;
//      }
//      throw user == null;
//    } catch (error) {
//      redirect('/register');
//    } finally {
//      if (success) {
//        redirect('/dashboard');
//      }
//    }
//  }
