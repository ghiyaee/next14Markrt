'use client';
import handelNewAddress from '@/components/layout/ShowAddress';
import { useState } from 'react';
function AddressUser({ searchParams }) {
  console.log(searchParams);
  const [ostan, setOstan] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [codePost, setCodePost] = useState('');
  const [tell, setTell] = useState('');
  const [mobile, setMobile] = useState('');

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const resulte = await handelNewAddress({
            ostan,
            city,
            street,
            codePost,
            tell,
            mobile,
          });
        }}
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
          placeholder="خیابان"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
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
      </form>
    </div>
  );
}

export default AddressUser;
