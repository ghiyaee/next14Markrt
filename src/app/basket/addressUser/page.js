'use client';
import handelNewAddress from '@/components/layout/ShowAddress';
import { useState, useContext } from 'react';
import { ContextStore } from '@/context/contextStore';
function AddressUser() {
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
      <div className='flex  justify-center'>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const { msg } = await handelNewAddress({
              ostan,
              city,
              street,
              codePost,
              tell,
              mobile,
              userConnect,
            });
            setMessage(msg);
          }}
          className="flex flex-col gap-4 w-[50%]  p-6
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
            placeholder="کدپستی"
            value={codePost}
            onChange={(e) => setCodePost(e.target.value)}
          />
          <input
            type="text"
            placeholder="تلفن ثابت"
            value={tell}
            onChange={(e) => setTell(e.target.value)}
          />
          <input
            type="text"
            placeholder="تلفن همراه"
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
