import DashbordAdmin from '@/components/layout/DashbordAdmin';
import Comment from '@/models/comments';
async function CommentsPage() {
  const res = await Comment.find();
  return (
    <main className="flex gap-2 container m-auto">
      <DashbordAdmin />
      <div className="w-screen flex flex-col  items-center bg-gradient-to-tr from-yellow-300 to-transparent">
        <h2 className="p-2">نظرات کاربران</h2>
        {res.map((c) => (
          <div key={c._id} className="flex flex-col gap-5 p-4 border w-full m-2">
            <p>{c.text}</p>
            <div >
              <button className="p-1  rounded-lg bg-green-500 text-gray-50 ml-4">
                منتظرتایید
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
