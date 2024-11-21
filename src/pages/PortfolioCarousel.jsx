import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import projectOne from '../assets/pro1 (2).png'
import projectTwo from '../assets/pro1 (3).png'
import projectThree from '../assets/pro1 (4).png'
import projectFour from '../assets/pro1 (1).png'
import projectFive from '../assets/maps.png'



const PortfolioCarousel = () => {
  const settings = {
    dots: true, // Show dots at the bottom
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Hide next/previous arrows
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Time between slides
  };

  return (
    <div className="portfolio-carousel max-w-4xl mx-auto h-auto">
      <div className='m-auto text-center mb-10'>
        <h2 className="text-4xl font-bold text-center mb-4 text-[#3e8e41]">Portfolio</h2>
        <span className="text-center text-gray-500 mb-8 font-bold text-xl">Most Recent Work</span>
      </div>
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="flex items-center justify-center px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={projectOne} 
              alt="Project"
              className="rounded-lg shadow-lg w-80 h-56"
            />
            <div>
              <h3 className="text-2xl font-semibold">Alokya Intitute</h3>
              <p className="text-gray-600 mt-2 text-xs">
               <a href="alokya.org">Alokya.org </a> is a government project that simplifies form filling and provides easy access to 
              admission information. It focuses on graphic design, 
              coding, and AI technology.
              </p>
              <a href="https://alokya.org/">
                <button className="mt-4 px-5 py-2 bg-[#3e8e41] text-white rounded-lg shadow-md hover:bg-[#4CAF50]">
                  View →
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* text-[#3e8e41] dark:text-[#4CAF50] */}
        {/* Add more slides as needed */}
        <div className="flex items-center justify-center px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={projectTwo}  
              alt="Project"
              className="rounded-lg shadow-lg w-80 h-56"
            />
            <div>
              <h3 className="text-2xl font-semibold">Largest Crypto Market</h3>
              <p className="text-gray-600 mt-2 text-xs">
              This project focuses on cryptocurrency, providing the latest news, trends, and insights
               about the crypto world. It also offers information on all available bitcoins and other digital currencies.
              </p>
             <a href="https://sooraj-2002.github.io/cryptoCurrencyX-/">
                <button className="mt-4 px-5 py-2 bg-[#3e8e41] text-white rounded-lg shadow-md hover:bg-[#4CAF50]">
                  View →
                </button>
             </a>
            </div>
          </div>
        </div>

      {/*  */}
      <div className="flex items-center justify-center px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={projectThree}  
              alt="Project"
              className="rounded-lg shadow-lg w-80 h-56"
            />
            <div>
              <h3 className="text-2xl font-semibold">Greek Gallery</h3>
              <p className="text-gray-600 mt-2 text-xs">
              This project uses the Unsplash API to allow users to search and view images related 
              to their queries. It provides an easy-to-use gallery of high-quality, royalty-free photos based on search input.
              </p>
              <a href="https://sooraj-2002.github.io/Greek_Galle">
              <button className="mt-4 px-5 py-2 bg-[#3e8e41] text-white rounded-lg shadow-md hover:bg-[#4CAF50]">
                  View →
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 ">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={projectFour}  
              alt="Project"
              className="rounded-lg shadow-lg w-80 h-56"
            />
            <div>
              <h3 className="text-2xl font-semibold">Astrology</h3>
              <p className="text-gray-600 mt-2 text-xs">
              This astrology project provides users with insights and information based on their zodiac signs. 
              It offers personalized readings and forecasts to explore astrological predictions.
              </p>
              <a href="https://sooraj-2002.github.io/newrepo/">
              <button className="mt-4 px-5 py-2 bg-[#3e8e41] text-white rounded-lg shadow-md hover:bg-[#4CAF50]">
                  View →
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 ">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={projectFive}  
              alt="Project"
              className="rounded-lg shadow-lg w-80 h-56"
            />
            <div>
              <h3 className="text-2xl font-semibold">REST Countries API with color theme switcher</h3>
              <p className="text-gray-600 mt-2 text-xs">
                This project uses the REST Countries API to fetch data about countries and display it in a user-friendly
                
              </p>
              <a href="https://sooraj-2002.github.io/newrepo/">
              <button className="mt-4 px-5 py-2 bg-[#3e8e41] text-white rounded-lg shadow-md hover:bg-[#4CAF50]">
                  View →
                </button>
              </a>
            </div>
          </div>
        </div>
      </Slider>

    </div>
  );
};

export default PortfolioCarousel;
