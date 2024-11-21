import React, { useState, useEffect } from 'react';
import { IoIosArrowDropup } from "react-icons/io";


function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-5 p-3"
          style={{ zIndex: 1000 }}
        >
          <IoIosArrowDropup className='text-3xl text-[#3e8e41]'/>
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
