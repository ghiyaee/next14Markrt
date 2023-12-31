import Link from 'next/link';
function Header() {
  return (
    <header className=" flex justify-between items-center  ">
      <Link href={'/'} className="text-primary font-semibold md:text-xl">
        <span className='bg-primary text-white  p-2 rounded-l-full '> دیجیتال مارکت</span>
      </Link>
      <Link href={'/'} className="md:hidden font-semibold text-gray-400">
        MENU
      </Link>
      <nav className=" flex gap-8 items-center font-semibold text-gray-500">
        <Link href={'/'} className="hidden md:block">
          خانه
        </Link>
        <Link href={'/products'} className="hidden md:block">
          محصولات
        </Link>
        <Link href={'/'} className="hidden md:block">
          درباره ما
        </Link>
        <Link href={'/'} className="hidden md:block">
          تماس باما
        </Link>
        <Link
          href={'/login'}
          className="bg-primary text-white px-8 py-2 rounded-full"
        >
          ورود / ثبت نام
        </Link>
      </nav>
    </header>
  );
}

export default Header;
