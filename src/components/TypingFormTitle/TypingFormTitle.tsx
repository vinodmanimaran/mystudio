import React from "react";
import { Link } from "react-router-dom";
import { TypewriterEffectSmooth } from "../../ui/typing";

interface Word {
  text: string;
  className?: string;
}

export function ContactUsHeader() {
  const words: Word[] = [
    {
      text: "Connect",
    },
    {
      text: "with",
    },
    {
      text: "StudioV",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[30rem] typing">
      <p className="text-neutral-600 dark:text-neutral-200 text-[20px] sm:text-base">
        Let's build something great together.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col  space-y-4 md:space-y-0 space-x-0 md:space-x-4 header-cta">
        <Link to="/contactus">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Get in Touch
          </button>
        </Link>
        <Link to="/services">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black cta-service_btn text-sm">
            Explore Services
          </button>
        </Link>
      </div>
    </div>
  );
}
