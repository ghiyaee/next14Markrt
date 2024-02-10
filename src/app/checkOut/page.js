'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
function CheckOut() {
  const [isActive, setIsActive] = useState(false);
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
  });
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);
  const input7Ref = useRef(null);
  const input8Ref = useRef(null);
  const handelChange = (e, nextRef, maxLength) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    if (value.length >= maxLength && nextRef) {
      nextRef.current.focus();
    }
  };
  useEffect(() => {
    if (
      inputs.input1.length >= 4 &&
      inputs.input2.length >= 4 &&
      inputs.input3.length >= 4 &&
      inputs.input4.length >= 4 &&
      inputs.input5.length >= 4 &&
      inputs.input6.length >= 2 &&
      inputs.input7.length >= 2 &&
      inputs.input8.length >= 6
    ) {
      setIsActive(true);
    }
  }, [inputs]);

  return (
    <section className="flex justify-center items-center container flex-col m-auto gap-6 ">
      <h3>این یک درگاه بانکی فیک است </h3>
      <div className="flex flex-col gap-4 border-2 rounded-md border-red-400 p-4 items-center">
        <div className="flex gap-5 items-center">
          <p>شماره کارت</p>
          <input
            className="w-12 h-8 text-center"
            type="text"
            name="input4"
            value={inputs.input4}
            onChange={(e) => handelChange(e, input5Ref, 4)}
            maxLength={4}
            ref={input4Ref}
          />
          <input
            className="w-12 h-8 text-center"
            type="text"
            name="input3"
            value={inputs.input3}
            onChange={(e) => handelChange(e, input4Ref, 4)}
            maxLength={4}
            ref={input3Ref}
          />
          <input
            className="w-12 h-8 text-center"
            type="text"
            name="input2"
            value={inputs.input2}
            onChange={(e) => handelChange(e, input3Ref, 4)}
            maxLength={4}
            ref={input2Ref}
          />
          <input
            className="w-12 h-8 text-center"
            type="text"
            name="input1"
            value={inputs.input1}
            onChange={(e) => handelChange(e, input2Ref, 4)}
            maxLength={4}
            ref={input1Ref}
            autoFocus
          />
        </div>
        <div className="flex gap-5">
          <p>cvv2</p>
          <input
            className="w-12 h-8 text-center"
            type="text"
            name="input5"
            value={inputs.input5}
            onChange={(e) => handelChange(e, input6Ref, 4)}
            maxLength={4}
            ref={input5Ref}
          />
          <p>ماه</p>
          <input
            className="w-12 h-8 text-center"
            type="text"
            name="input6"
            value={inputs.input6}
            onChange={(e) => handelChange(e, input7Ref, 2)}
            maxLength={2}
            ref={input6Ref}
          />
          <p>سال</p>
          <input
            className="w-12 h-8 text-center"
            type="text"
            name="input7"
            value={inputs.input7}
            onChange={(e) => handelChange(e, input8Ref, 2)}
            maxLength={2}
            ref={input7Ref}
          />
        </div>
        <div className="flex gap-20">
          <button className="bg-primary text-gray-50 px-4 py-0 rounded-lg">
            دریافت رمز دوم
          </button>
          <input
            className="w-16 h-8 text-center"
            type="password"
            name="input8"
            value={inputs.input8}
            onChange={(e) => handelChange(e, input8Ref, 6)}
            maxLength={6}
            ref={input8Ref}
            autoComplete="new-password"
          />
        </div>
        <Link
          href={'/'}
          className={`bg-primary text-gray-50 px-20 py-2 rounded-lg ${
            isActive
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-70'
          }`}
        >
          پرداخت نهایی
        </Link>
      </div>
    </section>
  );
}

export default CheckOut;
