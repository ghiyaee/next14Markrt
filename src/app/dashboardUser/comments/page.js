import DashboardUser from '@/components/layout/DashboardUser';

export default function Comments() {
  return (
    <main className="flex">
      <DashboardUser />
      <div
        className="w-screen flex flex-col  items-center
       bg-gradient-to-tr from-yellow-300 to-transparent"
      >
       Comments
      </div>
    </main>
  );
}
