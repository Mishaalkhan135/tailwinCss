import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [navs, setNavs] = useState(false);

	const handleNav = () => {
		setNavs(!navs);
	};

	return (
		<div className='flex bg-red-900 justify-between items-center h-28 max-x-[1440px] mx-auto px-8 text-white'>
			<h1 className='w-full text-3xl font-bold text-[#00df9a]'>
				Ecommerce Store
			</h1>
			<ul className='md:flex hidden cursor-pointer'>
				<li className='p-4 hover:text-red-500 hover:underline'>Home</li>
				<li className='p-4 hover:text-red-500 hover:underline'>
					Company
				</li>
				<li className='p-4 hover:text-red-500 hover:underline'>
					Resources
				</li>
				<li className='p-4 hover:text-red-500 hover:underline'>
					About
				</li>
				<li className='p-4 hover:text-red-500 hover:underline'>
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
					<li className='p-4 border-b border-gray-600 '>Home</li>
					<li className='p-4 border-b border-gray-600'>Company</li>
					<li className='p-4 border-b border-gray-600'>Resources</li>
					<li className='p-4 border-b border-gray-600'>About</li>
					<li className='p-4 border-b border-gray-600'>Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
