'use client';
import React, { useEffect, useState } from 'react';
import handelRegister from './HandelRegister';
import { useRouter } from 'next/navigation';
function Register() {
  const router = useRouter();
  const [name, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setMessage('');
    }, 3000);
  }, [message]);
  return (
    <section className=" flex flex-col items-center mt-10">
      <h1 className="">فرم ثبت نام</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await handelRegister({ name, email, password });
          if (res.success) {
            setMessage(res?.success);
            setEmail('');
            setPassword('');
            setUser('');
            router.push('/login');
          } else {
            setMessage(res?.error);
            setEmail('');
            setPassword('');
            setUser('');
          }
        }}
        className="flex flex-col w-96 gap-4 p-4"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setUser(e.target.value.toLowerCase())}
          placeholder="نام کاربری"
          required
          className="p-4 text-center bg-yellow-200 outline-none "
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          required
          placeholder="ایمیل"
          className="p-4 text-center bg-yellow-200 outline-none "
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value.toLowerCase())}
          value={password}
          required
          placeholder="پسورد"
          className="p-4 text-center bg-yellow-200 outline-none "
        />
        <button className="bg-primary text-white p-4">ثبت نام</button>
      </form>
      <div>{message}</div>
    </section>
  );
}
export default Register;


