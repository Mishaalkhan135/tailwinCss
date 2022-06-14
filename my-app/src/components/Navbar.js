import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [navs, setNavs] = useState(false);

	const handleNav = () => {
		setNavs(!navs);
	};

	return (
		<div className='flex justify-between items-center h-20 max-x-[1440px] mx-auto  text-black border-2 border-gray-300'>
			<img
				src='https://tse4.mm.bing.net/th?id=OIP.GzWSmbwQfMRgVewE1b_lVgHaCS&pid=Api&P=0&w=533&h=164'
				alt='logo for rolex'
				className='md:w-[18%] w-36 h-16'
			/>
			<ul className='md:flex hidden cursor-pointer font-serif'>
				<li className='p-4 hover:text-red-800 font-bold hover:underline'>
					Home
				</li>
				<li className='p-4 hover:text-red-800 font-bold hover:underline'>
					Company
				</li>
				<li className='p-4 hover:text-red-800 font-bold hover:underline'>
					Resources
				</li>
				<li className='p-4 hover:text-red-800 font-bold hover:underline'>
					About
				</li>
				<li className='p-4 hover:text-red-800 font-bold hover:underline'>
					Contact
				</li>
			</ul>
			<div onClick={handleNav} className='block md:hidden'>
				{navs ? (
					<AiOutlineClose size={30} />
				) : (
					<AiOutlineMenu size={30} />
				)}
			</div>
			<div
				className={
					navs
						? "fixed left-0 top-0 w-[50%]  border-r border-r-gray-900 h-full bg-gray-800 ease-in-out duration-500"
						: "fixed left-[-100%]"
				}
			>
				<h1 className='w-full text-3xl font-bold text-[#00df9a]'>
					React.
				</h1>
				<ul className='p-4 uppercase'>
					<li className='p-4 border-b border-gray-300 text-white'>
						Home
					</li>
					<li className='p-4 border-b border-gray-300 text-white'>
						Company
					</li>
					<li className='p-4 border-b border-gray-300 text-white'>
						Resources
					</li>
					<li className='p-4 border-b border-gray-300 text-white'>
						About
					</li>
					<li className='p-4 border-b border-gray-300 text-white'>
						Contact
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
