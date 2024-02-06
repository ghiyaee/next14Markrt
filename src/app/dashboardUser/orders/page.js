import DashboardUser from '@/components/layout/DashboardUser';

export default function Orders() {
  return (
    <main className='flex'>
      <DashboardUser />
      <div
        className="w-screen flex flex-col  items-center
       bg-gradient-to-tr from-yellow-300 to-transparent"
      >
        orders
      </div>
    </main>
  );
}
