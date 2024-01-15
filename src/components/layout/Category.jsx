import Link from 'next/link';
const link = [
  { name: 'اپل', category: 'apple' },
  { name: 'سامسونگ', category: 'samsung' },
  { name: 'شیامی', category: 'xiaomi' },
  { name: 'موتورولا', category: 'motorola' },
  { name: 'وان پلاس', category: 'onePluse' },
];
function Category() {
  return (
    <div className="container m-auto flex flex-col gap-[40px] items-center mt-0">
      <h2 className="text-center text-gary-400 text-xl">دسته بندی محصولات</h2>
      <div className="flex flex-wrap  flex-col md:flex-row justify-center gap-[10px] ">
        {link.map((link) => (
          <div key={link.name} className=" ">
            <Link
              href={{
                pathname: `/mobile/${link.category}`,
                query: { value: link.category },
              }}
            >
              <button
                className="w-28 h-28  bg-gradient-to-tr
               from-yellow-400 to-transparent rounded-full flex-col
                    flex items-center justify-center text-black text-2xl
                      cursor-pointer relative shadow-[0_25px_25px_-24px_rgb(0,0,0,0.7)]"
              >
                <p className="text-center text-lg  "> {link.name}</p>
                <span
                  className="border-[2px] border-y-primary  absolute top-0
               w-28 h-28 rounded-full animate-spin "
                ></span>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
