import React from 'react';
import { FaTelegram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
function Footer() {
  return (
    <div
      className="bg-gradient-to-tr  shadow-[0_25px_25px_-24px_rgb(0,0,0,0.7)]
     from-yellow-300 rounded-lg to-transparent mt-0 h-[250px]
     flex flex-col md:flex-row gap-0   md:gap-[200px] items-center justify-around"
    >
      <div>
        <ul className="flex flex-col md:flex-row gap-4">
          <li className="bg-primary text-white p-2 rounded-md text-center">
            واحدفروش
          </li>
          <li className="bg-primary text-white p-2 rounded-md text-center">
            واحدارسال
          </li>
          <li className="bg-primary text-white p-2 rounded-md text-center">
            واحدپشتیبانی
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p>راه های ارتباط با ما</p>
        <ul className="flex  gap-5 text-2xl">
          <li>
            <FaTelegram />
          </li>
          <li>
            <FaWhatsapp />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <AiTwotoneMail />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
