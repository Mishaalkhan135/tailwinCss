import React from "react";

const cards = () => {
	return (
		<div className='flex md:flex-row flex-col gap-6 p-6 w-full'>
			<div className='w-full h-56 shadow-2xl items-center justify-center flex bg-gradient-to-r from-indigo-500 via-red-500 to-blue-500 '>
				<h1 className='text-xl font-bold text-red-600 underline cursor-pointer font-serif'>
					Mishaal Khan
				</h1>
			</div>
			<div className='w-full h-56 shadow-2xl items-center justify-center flex bg-gradient-to-l from-black via-purple-500 to-white '>
				<h1 className='text-xl font-bold text-red-600 underline cursor-pointer font-serif'>
					Mishaal Khan
				</h1>
			</div>
			<div className='w-full h-56 shadow-2xl items-center justify-center flex bg-gradient-to-br from-purple-500 via-green-500 to-pink-500'>
				<h1 className='text-xl font-bold text-red-600 underline cursor-pointer font-serif'>
					Mishaal Khan
				</h1>
			</div>
			<div className='w-full h-56 shadow-2xl items-center justify-center flex bg-gradient-to-bl from-orange-900 via-yellow-500 to-gray-500'>
				<h1 className='text-xl font-bold text-red-600 underline cursor-pointer font-serif'>
					Mishaal Khan
				</h1>
			</div>
			<div className='w-full h-56 shadow-2xl items-center justify-center flex bg-gradient-to-tr from-indigo-500 via-white to-blue-500'>
				<h1 className='text-xl font-bold text-red-600 underline cursor-pointer font-serif'>
					Mishaal Khan
				</h1>
			</div>
			<div className='w-full h-56 shadow-2xl items-center justify-center flex bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500'>
				<h1 className='text-xl font-bold text-red-600 underline cursor-pointer font-serif'>
					Mishaal Khan
				</h1>
			</div>
		</div>
	);
};

export default cards;
