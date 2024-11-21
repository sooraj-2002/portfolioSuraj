
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-2xl font-semibold focus:outline-none focus:opacity-80"
              href="/"
              aria-label="Brand"
            >
              SurajKumar
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                onClick={handleToggle}
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              >
                {isOpen ? (
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                )}
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block`}
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a
                className="font-medium text-blue-500 focus:outline-none text-base"
                href="#Home"
                aria-current="page"
              >
                Home
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400  text-base"
                href="#Aboutme"
              >
                About
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400  text-base"
                href="#SkillsAccordion"
              >
                Skill
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400  text-base"
                href="#InstagramSection"
              >
                Follow_me
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400  text-base"
                href="#PortfolioCarousel"
              >
                Portfolio
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400  text-base"
                href="#Contact"
              >
                 Contact Me
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
