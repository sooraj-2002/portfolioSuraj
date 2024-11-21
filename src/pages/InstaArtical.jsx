import React from "react";
import { IoLogoInstagram } from "react-icons/io";

const InstagramSection = () => {
  return (
   <div className="instaPost min-h-[60vh] p-5">
     <section className="flex flex-col items-center border p-10 shadow-xl">
      <h2 className="text-4xl font-bold text-[#3e8e41] mb-4">
        Follow Me on Instagram  <IoLogoInstagram className="inline text-red-400"/>
      </h2>
      <p className="text-gray-500 text-center text-base max-w-xl">
        I share coding tips, tutorials, and updates about my projects <br /> on my
        Instagram. Join me on my journey and let's learn together!
      </p>
      <a
        href="https://www.instagram.com/developercodetec/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-white py-2 px-6 rounded-lg shadow-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 transition"
        >
        Follow Me on Instagram
        </a>
    </section>
   </div>
  );
};

export default InstagramSection;
