'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
function SearchBr() {
  const router = useRouter();
  const [searchProduct, setSearchProduct] = useState('');
  return (
    <section className="">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchProduct('')
        }}
        className=" flex items-center "
      >
        <input
          type="text"
          className="w-[100%] h-10 border rounded-full outline-none text-center "
          placeholder=" جستجوکنید"
          onChange={(e) => setSearchProduct(e.target.value.toLocaleLowerCase())}
          value={searchProduct}
        />
        {searchProduct ? (
          <Link
            href={{
              pathname: `/product`,
              query: { value: searchProduct },
            }}
            className="relative "
          >
            <button
              className="bg-primary text-white h-10 px-2
           rounded-full absolute left-0  -translate-y-[50%] top-[50%]"
            >
              جستجوکن
            </button>
          </Link>
        ) : (
          ''
        )}
      </form>
    </section>
  );
}

export default SearchBr;
