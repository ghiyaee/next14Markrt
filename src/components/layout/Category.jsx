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
    <div className="container m-auto flex flex-col gap-[60px] items-center mt-0">
      <h2 className="text-center text-gary-400 text-xl">دسته بندی محصولات</h2>
      <div className="flex flex-wrap  flex-col md:flex-row justify-center gap-[20px] ">
        {link.map((link) => (
          <div key={link.name} className=" ">
            <Link
              href={{
                pathname: `/mobile/${link.category}`,
                query: { value: link.category },
              }}
            >
              <button
                className="w-36 h-36  bg-gradient-to-tr
               from-yellow-300 to-transparent rounded-full flex-col
                    flex items-center justify-center text-black text-2xl
                      cursor-pointer relative shadow-[0_25px_25px_-24px_rgb(0,0,0,0.7)]"
              >
                <p className="text-center text-lg  "> {link.name}</p>
                <span
                  className="border-[2px] border-b-primary  absolute top-0
               w-36 h-36 rounded-full animate-spin "
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
