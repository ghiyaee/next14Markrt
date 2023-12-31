import Link from 'next/link';
import React from 'react';
import User from '@/models/User';
import dbConnect from '@/dbConnect';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
function Login() {
  async function handelLogin(data) {
    'use server';
    let email = data.get('email')?.valueOf();
    let password = data.get('password')?.valueOf();
    let success = false;
    try {
      const user = await User.findOne({ email: email });
      if (user.email === email) {
        if (bcrypt.compare(user.password,password)) success = true;
      }
      throw user == null;
    } catch (error) {
      redirect('/register');
    } finally {
      if (success) {
        redirect('/dashboard');
      }
    }
  }

  return (
    <section className=" flex flex-col items-center mt-10 ">
      <h1 className="">فرم ورود</h1>
      <form action={handelLogin} className="flex flex-col w-96 gap-4 p-4">
        <input
          type="email"
          required
          placeholder="ایمیل"
          className="p-4 text-center bg-gray-400 outline-none "
          name="email"
        />
        <input
          type="password"
          required
          placeholder="پسورد"
          className="p-4 text-center bg-gray-200 outline-none "
          name="password"
        />
        {}
        <button className="bg-primary text-white p-4">ورود</button>
      </form>
      <p>
        ثبت نام نکردید؟{' '}
        <Link href={'/register'} className="text-blue-500">
          اینجا کلیک کنید
        </Link>
      </p>
    </section>
  );
}

export default Login;
