import React from 'react'
import avatarTwo from '../assets/bout me.jpg'

const Aboutme = () => {
  return (
    <div>
        <div className="about-me mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          {/* img section for about me  */}
          <div className="img-avatar">
            <img src={avatarTwo} alt="Suraj" className="w-auto rounded-lg object-cover hidden md:block"/>
          </div>
          
          <div className="aboutme m-auto p-5">
              <h2 className="text-5xl font-bold text-[#3e8e41] dark:text-[#4CAF50]">
                About Me
              </h2>
              <span className='text-gray-400 text-2xl font-semibold'>My introduction</span>
              <p className="text-gray-600 text-base dark:text-gray-400">
                I'm a passionate and dedicated web developer with a strong focus on creating high-quality, user-friendly
                web applications. With a solid foundation in HTML, CSS, JavaScript, ReactJs, Tailwind , C++, and PHP I'm well-equipped
                to tackle a wide range of web development projects.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I'm a lifelong learner, always seeking to improve my skills and stay up-to-date with the
                latest web development trends and technologies.
              </p>
          {/* experience */} 
          <div className="experience items-start text-left h-16 flex py-4">
                  <div className="pt-3">
                      <h2 className=" text-2xl font-semibold text-[#3e8e41] dark:text-[#4CAF50]">
                      <span className='text-4xl text-center'>01</span>
                       <br />Years of Experience
                      </h2>
                  </div>
                
                <div className="p-3 m-auto">
                  <h2 className="font-semibold text-2xl text-[#3e8e41] dark:text-[#4CAF50]">
                   <span className='text-4xl text-center'>05</span> <br />
                   Complete  Projects
                  </h2>
                </div>
          </div> <br /> <br />
          
          </div>
        </div>
    </div>
  )
}

export default Aboutme