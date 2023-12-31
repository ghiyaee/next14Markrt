'use client';
import { useState } from 'react';
const images = [
  '/img/app14.png',
  '/img/pixel7.png',
  '/img/pixel7b.png',
  '/img/app15.png',
  '/img/app14.png',
  '/img/motorzb.png',
  '/img/samflip.png',
  '/img/samflipb.png',
  '/img/app14.png',
  '/img/pixel7.png',
  '/img/pixel7b.png',
  '/img/app15.png',
  '/img/app14.png',
  '/img/motorzb.png',
  '/img/samflip.png',
  '/img/samflipb.png',
];
import Image from 'next/image';
function Slider() {
  let [move, setMove] = useState({
    move: `transform -translate-x-[10rem]`,
  });
  const handelArroLeft = () => {
    if (move.move == `transform -translate-x-[10rem]`)
      setMove({ move: `transform translate-x-[10rem]` });
    if (move.move == `transform translate-x-[10rem]`)
      setMove({ move: `transform translate-x-[20rem]` });
    if (move.move == `transform translate-x-[20rem]`)
      setMove({ move: `transform translate-x-[30rem]` });
    if (move.move == `transform translate-x-[30rem]`)
      setMove({ move: `transform translate-x-[40rem]` });
    if (move.move == `transform translate-x-[40rem]`)
      setMove({ move: `transform translate-x-[52.7rem]` });
  };
  const handelArroRight = () => {
    if (move.move == `transform translate-x-[52.7rem]`)
      setMove({ move: `transform translate-x-[40rem]` });
    if (move.move == `transform translate-x-[40rem]`)
      setMove({ move: `transform translate-x-[30rem]` });
    if (move.move == `transform translate-x-[30rem]`)
      setMove({ move: `transform translate-x-[20rem]` });
    if (move.move == `transform translate-x-[20rem]`)
      setMove({ move: `transform translate-x-[10rem]` });
    if (move.move == `transform translate-x-[10rem]`)
      setMove({ move: `transform -translate-x-[10rem]` });
  };
  return (
    <section className="relative bg-primary rounded-lg w-full p-5">
      <h2 className="text-white">محصولات در یک نگاه پس بزن بریم</h2>
      <div className=" overflow-hidden flex  items-center ">
        {images.map((i, idx) => (
          <div className="p-[0.10rem] " key={idx}>
            <div
              className={`w-40 h-[10rem] bg-gray-50
              flex items-center rounded-lg  ${move.move} duration-1000`}
            >
              <Image
                width={200}
                height={150}
                src={i}
                alt={`img${i}`}
                className="p-2"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className={`${
          move.move === 'transform -translate-x-[10rem]' ? 'hidden' : 'block'
        } 
           absolute top-[50%] -translate-y-[50%] w-10 h-10 text-2xl 
         bg-gray-50 rounded-full right-1  flex items-center justify-center `}
        onClick={handelArroRight}
      >
        {'<'}
      </button>
      <button
        className={`${
          move.move === 'transform translate-x-[52.7rem]' ? 'hidden' : 'block'
        } w-10 h-10 text-2xl flex items-center justify-center
       bg-gray-50 rounded-full  absolute top-[50%] -translate-y-[50%] left-1 `}
        onClick={handelArroLeft}
      >
        {'>'}
      </button>
    </section>
  );
}

export default Slider;
