'use client';
import { useState, useRef, useEffect, useContext } from 'react';
import { ContextStore } from '@/context/contextStore';
import bank from '@/controller/bank/Bank';
import FadeLoader from 'react-spinners/FadeLoader';
import { useRouter } from 'next/navigation';
import { handleUpdateBasket } from '@/controller/basket/BasketDb';
function CheckOut() {
  const router = useRouter();
  const { state, dispatch } = useContext(ContextStore);
  const { cartItem, userConnect } = state;
  const [isActive, setIsActive] = useState(false);
  const [isCheck, setIsCheck] = useState(true);
  const [loading, setLoading] = useState(false);
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
  const [bankData, setBankData] = useState({
    cash: false,
    msgOk: '',
    msgNot: '',
  });
  const { cash, msgOk, msgNot } = bankData;
  const manyTotal = cartItem.reduce(
    (a, c) =>
      a +
      Number(c.quantity ? c.quantity : c.product_id.quantity) *
        Number(c.product_id ? c.product_id?.price : c.price) +
      (Number(c.quantity ? c.quantity : c.product_id.quantity) *
        Number(c.product_id ? c.product_id?.price : c.price) *
        9) /
        100,
    0
  );
  const productTotal = cartItem.reduce(
    (a, c) =>
      a +
      Number(c.quantity ? c.quantity : c.product_id.quantity) *
        Number(c.product_id ? c.product_id?.price : c.price),
    0
  );
  const tax = cartItem.reduce(
    (a, c) =>
      a +
      (Number(c.quantity ? c.quantity : c.product_id.quantity) *
        Number(c.product_id ? c.product_id?.price : c.price) *
        9) /
        100,
    0
  );
  console.log(cartItem.length === 1 && cartItem[0]?.product_id?._id);
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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center gap-5  text-2xl">
          در حال پردازش ...
          <FadeLoader color={'#f41d3e'} loading={loading} size={100} />
        </div>
      ) : (
        <section
          className={`${
            isCheck
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-70'
          } flex justify-center items-center container flex-col m-auto gap-6 `}
        >
          <h3>این یک درگاه بانکی فیک است </h3>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsCheck(false);
              setLoading(true);
              setIsActive(false);
              const { cash, msgOk, msgNot } = await bank({
                inputs,
                manyTotal,
                userConnect,
              });
              setBankData({ cash, msgOk, msgNot });
              if (cash) {
                await handleUpdateBasket(cartItem, tax, productTotal);
                setTimeout(async () => {
                  dispatch({ type: 'RESTCARTITEM', payload: [] });
                  router.push('/dashboardUser/orders');
                }, 5000);
              } else {
                setTimeout(async () => {
                  router.push('/basket');
                }, 5000);
              }
            }}
            className="flex flex-col gap-4 border-2 rounded-md border-red-400 p-4 items-center"
          >
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
            <div className="flex gap-5 items-center">
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
              <span className="bg-primary text-gray-50 px-4 py-0 rounded-lg">
                دریافت رمز دوم
              </span>
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
            <p>مبلغ قابل پرداخت (ریال) : {manyTotal}</p>
            <button
              className={`bg-primary text-gray-50 px-10 py-2 rounded-lg ${
                isActive
                  ? 'pointer-events-auto opacity-100'
                  : 'pointer-events-none opacity-70'
              }`}
            >
              پرداخت نهایی
            </button>
            <p>{cash ? msgOk : msgNot}</p>
          </form>
        </section>
      )}
    </>
  );
}

export default CheckOut;
