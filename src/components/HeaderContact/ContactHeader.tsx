import React from "react";
import { WavyBackground } from "../../ui/lamp";

export default function ContactPageHeader() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 ">
      <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-bold inter-var text-center mb-4 overflow-hidden" >
        Contact Us
      </h1>
      <p className="text-lg md:text-xl text-white font-normal inter-var text-center">
        Have a question or need assistance? Drop us a message below, and we'll get back to you as soon as possible.
      </p>
    </WavyBackground>
  );
}
