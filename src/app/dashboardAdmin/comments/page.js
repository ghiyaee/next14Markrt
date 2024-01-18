'use client';
import DashbordAdmin from '@/components/layout/DashbordAdmin';
import { handelMsg, handelAllComment } from '@/components/layout/ShowComment';
import Image from 'next/image';
import { useEffect, useState } from 'react';
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
      <div className="w-screen flex flex-col  items-center bg-gradient-to-tr from-yellow-300 to-transparent">
        <h2 className="p-2">نظرات کاربران</h2>
        {resulte.map((c) => (
          <div
            key={c._id}
            className="flex flex-col gap-5 p-4 border border-blue-600 rounded-lg w-[98%] m-2"
          >
            <p>{c.user_id.name}</p>
            <p>{c.text}</p>
            <div>
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  const { res } = await handelMsg(c._id);
                  if (res) {
                    setConfirmation(res);
                  }
                }}
                className="p-1  rounded-lg bg-green-500 text-gray-50 ml-4"
              >
                {c.show_comment ? 'تاییدشد' : 'منتظرتایید'}
              </button>
              <button className="px-4 rounded-lg py-1 bg-primary text-gray-50">
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default CommentsPage;

//c.show_comment ? 'تاییدشد' : 'منتظرتایید'