import React from "react";
import { Meteors } from "../../ui/fall";
import emailIcon from '../../assets/icons/email.svg';
import callIcon from '../../assets/icons/contact.svg';

const MyInfoCard: React.FC = () => {
  return (
    <div className="">
      <div className="w-full relative max-w-xs myinfo-card ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50  company-name">
            StudioV
          </h1>
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            We specialize in providing top-notch web development and design solutions. Our mission is to empower businesses with innovative digital experiences.
          </p>
          <div className="flex flex-col text-white mb-4 relative z-50">
            <div className="call flex flex-row items-center gap-3">
              <img src={callIcon} alt="Call" width={50} className="" />
              <p>7550239493</p>
            </div>          
            <div className="email flex flex-row items-center gap-3">
              <img src={emailIcon} alt="Email" className="m-[10px]" width={20} />
              <p>vk52414151@gmail.com</p>
            </div>
          </div>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}

export default MyInfoCard;
