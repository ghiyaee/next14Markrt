import { useState, useContext, useEffect } from 'react';
import { ContextStore } from '@/context/contextStore';
import { useRouter } from 'next/navigation';
import CommentNew from '@/components/layout/Comment';
function InfoProduct({ product }) {
  const router = useRouter();
  const [success,setSucces]=useState('')
  const { state, dispatch } = useContext(ContextStore);
  const { comment, userConnect } = state;
  const [showTab, setShowTab] = useState();
  const [hiddenTab, setHiddenTab] = useState('hidden');
  const [text, setText] = useState('');
  const handelTabInf = () => {
    setHiddenTab('hidden');
    setShowTab('block');
  };
  const handelTabMsg = () => {
    setHiddenTab('block');
    setShowTab('hidden');
  };
  useEffect(() => {
    const time = setTimeout(() => {
    setSucces('')
    }, 2800)
    return () => {
      clearTimeout(time)
    }
},[success])
  return (
    <section
      className="border border-zinc-400 
      shadow-[0_25px_25px_-24px_rgb(0,0,0,0.7)]"
    >
      <button
        className={`${
          showTab === 'hidden'
            ? 'bg-inherit text-black'
            : 'bg-primary text-gray-50 '
        }  px-6 py-4 hover:bg-primary 
        duration-700 hover:text-gray-50
        border-l-2 border-white`}
        onClick={handelTabInf}
      >
        مشخصات فنی
      </button>
      <button
        className={`${
          hiddenTab === 'block' ? 'bg-primary text-gray-50 ' : ''
        }   px-6 py-4 hover:bg-primary 
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
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (userConnect.length > 0) {
              const comment = await CommentNew({ userConnect, text, product });
              setSucces(comment.success);
              setText('');
            } else {
              router.push('/login');
            }
          }}
          className="p-2 flex flex-col gap-2"
        >
          <textarea
            className="p-2 bg-inherit border border-gray-400 outline-none"
            cols={60}
            rows={10}
            placeholder="نظرخودرا بنویسید"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <div className="flex items-center gap-4">
            <button className="bg-primary text-white py-2 rounded-lg text-xl w-[110px]">
              ارسال نظر
            </button>
            <p className="bg-green-500 text-white py-2 rounded-lg text-xl">
              {success}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default InfoProduct;
