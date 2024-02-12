'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { ContextStore } from '@/context/contextStore';
import handelLogin from './HandelLogin';
import { useRouter } from 'next/navigation';
// import { handelBasket, handelBasketDb } from '../../controller/basket/BasketDb';
function Login() {
  const router = useRouter();
  const { state, dispatch } = useContext(ContextStore);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErroe] = useState('');
  const { userConnect } = state;
  useEffect(() => {
    const time = setTimeout(() => {
      setErroe('');
    }, 2600);
    return () => {
      clearTimeout(time);
    };
  }, [error]);
  return (
    <section className=" flex flex-col items-center mt-10 ">
      <h1 className="">فرم ورود</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const { resulteEmail, resulteAddress, resulteBasket, msgError } =
            await handelLogin({
              email,
              password,
            });
          console.log(resulteBasket);
          if (resulteEmail) {
            dispatch({ type: 'USERLOGIN', payload: resulteEmail });
            dispatch({ type: 'ADDRESS', payload: resulteAddress });
            if (resulteBasket.length > 0) {
              dispatch({ type: 'ADDITEM', payload: resulteBasket });
            }
            router.push('/');
          } else {
            setErroe(msgError);
          }
        }}
        className="flex flex-col w-96 gap-4 p-4"
      >
        <input
          type="email"
          required
          placeholder="ایمیل"
          className="p-4 text-center bg-gray-400 outline-none "
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
        />
        <input
          type="password"
          required
          placeholder="پسورد"
          className="p-4 text-center bg-gray-200 outline-none "
          value={password}
          onChange={(e) => setPassword(e.target.value.toLowerCase())}
        />
        {}
        <button className="bg-primary text-white p-4">ورود</button>
      </form>
      <p
        className={`${error ? 'block' : 'hidden'} my-5 transform p-2
       duration-1000 bg-red-500 text-gray-50`}
      >
        {error}
      </p>
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
