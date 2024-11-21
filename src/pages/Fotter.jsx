import React from 'react'
import logo from '../assets/s.jpg'
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";

const Fotter = () => {
  return (
    <div>
 <footer class="px-4 py-8 dark:bg-gray-100 dark:text-gray-600 ">
	<div class="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div class="flex flex-row pr-3 space-x-4 sm:space-x-4">
			<div class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-600">
				<img src={logo} className='w-10 rounded' alt="logo" />
			</div>
			<div class="items-start m-0 p-0">
				<p className='text-[#3e8e41] font-semibold'>Suraj</p>
				<p className='font-medium text-gray-500'>WebDeveloper</p>
			</div>
		</div>
		<ul class="flex flex-wrap  space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" className='text-2xl' href="https://www.instagram.com/developercodetec/"><IoLogoInstagram className='text-red-500'/></a>
			</li>
			<li>
				<a rel="noopener noreferrer" className='text-2xl' href="https://www.linkedin.com/in/suraj-kumar-719084229/"><CiLinkedin  className='text-blue-700'/></a>
			</li>
			<li>
				<a rel="noopener noreferrer" className='text-2xl' href="https://x.com/soorajkuma65408"><RiTwitterXLine  className='text-black'/></a>
			</li>
		</ul>
	</div>
</footer></div>
  )
}

export default Fotter
