'use client';
import { handelNewAddress } from '@/controller/address/ShowAddress';
import { useState, useContext, useReducer } from 'react';
import { ContextStore } from '@/context/contextStore';
import { useRouter } from 'next/navigation';
function AddressUser() {
  const router = useRouter();
  const { state, dispatch } = useContext(ContextStore);
  const { userConnect } = state;
  const [ostan, setOstan] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [codePost, setCodePost] = useState('');
  const [tell, setTell] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  return (
    <main className="flex flex-col justify-center container m-auto">
      <h2 className="text-center p-3">ثبت آدرس</h2>
      <div className="flex  justify-center">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (
              ostan === '' ||
              city === '' ||
              street === '' ||
              codePost === '' ||
              tell === '' ||
              mobile === ''
            ) {
              setMessage('تمام مقادیرباید واردشوند');
              setTimeout(() => {
                setMessage('');
              }, 2000);
              return;
            }
            if (
              isNaN(Number(codePost)) ||
              isNaN(Number(tell)) ||
              isNaN(Number(mobile))
            ) {
              setMessage(' مقادیر وارده اشتباه است');
              setTimeout(() => {
                setMessage('');
              }, 2000);
              return;
            }

            const { msg,address } = await handelNewAddress({
              ostan,
              city,
              street,
              codePost,
              tell,
              mobile,
              userConnect,
            });
            setMessage(msg);
            setTimeout(() => {
              setMessage('');
              dispatch({ type: 'ADDRESS',payload:address });
              router.push('/basket');
            }, 2000);
          }}
          className="flex flex-col gap-2 w-[50%]  p-6
        shadow-[0_25px_55px_-24px_rgb(0,0,0,0.7)]"
        >
          <input
            type="text"
            placeholder="استان"
            value={ostan}
            onChange={(e) => setOstan(e.target.value)}
          />
          <input
            type="text"
            placeholder="شهر"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            type="text"
            placeholder=" شماره کدپستی"
            value={codePost}
            onChange={(e) => setCodePost(e.target.value)}
          />
          <input
            type="text"
            placeholder=" شماره تلفن ثابت"
            value={tell}
            onChange={(e) => setTell(e.target.value)}
          />
          <input
            type="text"
            placeholder=" شماره تلفن همراه"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            type="text"
            placeholder="خیابان"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className=""
          />
          <button className="bg-primary text-gray-50 w-full text-center p-2">
            ثبت
          </button>
          <p
            className={`${
              message ? 'block' : 'hidden'
            } text-center bg-green-500 text-gray-50 p-2 rounded-lg`}
          >
            {message}
          </p>
        </form>
      </div>
    </main>
  );
}

export default AddressUser;
