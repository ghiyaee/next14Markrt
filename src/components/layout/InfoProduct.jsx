import { useState } from 'react';
function InfoProduct() {
  const [showTab, setShowTab] = useState();
  const [hiddenTab, setHiddenTab] = useState('hidden');
  const handelTabInf = () => {
    setHiddenTab('hidden');
    setShowTab('block');
  };
  const handelTabMsg = () => {
    setHiddenTab('block');
    setShowTab('hidden');
  };
  return (
    <section className="border border-zinc-400 shadow-[0_25px_25px_-24px_rgb(0,0,0,0.7)]">
      <button
        className="px-6 py-4 hover:bg-primary 
        duration-700 hover:text-gray-50 border-l"
        onClick={handelTabInf}
      >
        مشخصات فنی
      </button>
      <button
        className={`$ px-6 py-4 hover:bg-primary 
        duration-700 hover:text-gray-50`}
        onClick={handelTabMsg}
      >
        نظرات دیگران
      </button>
      <div
        className={`${showTab}  px-[2rem] py-[1rem] border border-zinc-200 `}
      >
        <h3 className="mt-5">ظرفیت 128 ,512 گیگ</h3>
        <p className="mt-5">دوربین اصلی 50 مگابیکسلی</p>
        <p className="mt-5">دوربین سلفی 16 مگابیکسلی</p>
        <p className="mt-5">در سه رنگ مشکی سفید آبی</p>
        <p className="mt-5">ظرفیت باطری 5000 میلی آمپر</p>
        <p className="mt-5">صفحه نمایش سوپر آمولد</p>
        <p className="mt-5">پردازنده نسل جدید A1</p>
      </div>
      <div
        className={`${hiddenTab} px-[2rem] py-[1rem] border border-zinc-200 `}
      >
        <form action="" className="p-2 flex flex-col gap-2">
          <textarea
            className="p-2 bg-inherit border border-gray-400 outline-none"
            cols={60}
            rows={10}
            placeholder="نظرخودرا بنویسید"
            
          />
          <button
            className="bg-primary text-white py-2 rounded-lg text-xl w-[110px]"
            onClick={''}
          >
            ارسال نظر
          </button>
        </form>
      </div>
    </section>
  );
}

export default InfoProduct;
