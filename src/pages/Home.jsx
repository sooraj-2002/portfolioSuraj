import React from 'react';
import Avatar from '../assets/meandme.jpg';
import { FaGithub } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { CiLinkedin } from 'react-icons/ci';
import { RiTwitterXLine } from 'react-icons/ri';
import { FiDownloadCloud } from 'react-icons/fi';

const Home = () => {
  const resumeUrl =
    'https://soorajku47.hackerresume.io/6f494513-9191-4257-a8cd-0020a0bcacea';
  const fileName = '../assets/Resume.pdf'; // Name of the downloaded file
  return (
    <div>
      <div className="home-page px-4 sm:px-6 lg:px-8 pt-4 mt-20 flex flex-col-reverse md:flex-row items-center md:items-start">
        {/* social media */}
        <div className="flex flex-row md:flex-col gap-4 md:gap-2 mx-0 md:mx-10 mt-4 md:flex social">
          <a
            href="https://github.com/sooraj-2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl social-media"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/developercodetec/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl social-media"
          >
            <IoLogoInstagram />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl social-media"
          >
            <CiLinkedin />
          </a>
          <a
            href="https://x.com/soorajkuma65408"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl social-media"
          >
            <RiTwitterXLine />
          </a>
        </div>
        <div className="intro self text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-800 dark:text-white">
            Hello from, <br />
            <span className="text-[#3e8e41]">Suraj</span>
          </h1>
          <h2 className="text-gray-300 dark:text-gray-400 text-2xl md:text-4xl font-semibold">
            Web Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base">
            Advanced expertise in developing and managing high-qality <br /> web
            applications and crafting responsive, user-friendly interfaces.
          </p>
          <div className="btn-section flex  sm:flex-row gap-4 mt-6">
            <a href="#Contact">
              <button className="btn-contact font-bold px-6 py-3 bg-green-500 text-white rounded-lg">
                Contact Me
              </button>
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              download={fileName}
            >
              <button className="btn-cv font-bold flex items-center gap-2 px-6 py-3 rounded-lg border">
                Download CV
                <FiDownloadCloud />
              </button>
            </a>
          </div>
        </div>
        <div className="img-avatar mb-6 md:mb-0">
          <img
            src={Avatar}
            alt="Suraj"
            className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
