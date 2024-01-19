'use client';
import DashbordAdmin from '@/components/layout/DashbordAdmin';
import {
  handelMsg,
  handelAllComment,
  handelDeleteComment,
} from '@/components/layout/ShowComment';
import { useEffect, useState } from 'react';
import moment from 'jalali-moment';
function CommentsPage() {
  const [resulte, setResulte] = useState([]);
  const [confirmation, setConfirmation] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { res } = await handelAllComment();
        setResulte(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <main className="flex gap-2 container m-auto">
      <DashbordAdmin />
      <div
        className="w-screen flex flex-col  items-center
       bg-gradient-to-tr from-yellow-300 to-transparent"
      >
        {resulte.length > 0 ? (
          <>
            <h2 className="p-2">نظرات کاربران</h2>
            {resulte.map((c) => (
              <div
                key={c._id}
                className="flex flex-col gap-5 p-4 border border-blue-600 rounded-lg w-[98%] m-2"
              >
                <div className=' flex gap-4 flex-wrap'>
                  {moment(c.date).locale('fa').format('HH:D YYYY/MM/DD')}
                  <p> نام کاربر:{c.user_id.name}</p>
                </div>
                <p>{c.text}</p>
                <div>
                  <button
                    onClick={async (e) => {
                      e.preventDefault();
                      const { res } = await handelMsg(c._id);
                      setResulte(res);
                    }}
                    className="p-1  rounded-lg bg-green-500 text-gray-50 ml-4"
                  >
                    {c.show_comment ? 'تاییدشد' : 'منتظرتایید'}
                  </button>
                  <button
                    onClick={async (e) => {
                      e.preventDefault();
                      const { newComment } = await handelDeleteComment(c._id);
                      setResulte(newComment);
                    }}
                    className="px-4 rounded-lg py-1 bg-primary text-gray-50"
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="">هیچ نظری ارسال نشده</div>
        )}
      </div>
    </main>
  );
}
export default CommentsPage;
