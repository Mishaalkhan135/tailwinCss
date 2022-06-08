import React from "react";

const body = () => {
	return (
		<div className='grid grid-cols-2 p-10 bg-slate-700 text-white'>
			<h1 className='md:text-6xl sm:text-4xl text-xl items-center'>
				Categories
			</h1>
			<ul className='flex md:flex-row gap-5 mx-auto text-md font-bold underline justify-center items-center flex-col cursor-pointer bg-gray-900 p-6'>
				<li className='hover:text-red-500'>Heading</li>
				<li className='hover:text-red-500'>Text</li>
				<li className='hover:text-red-500'>Sub title</li>
				<li className='hover:text-red-500'>About</li>
				<li className='hover:text-red-500'>Mishaal</li>
				<li className='hover:text-red-500'>khan</li>
				<li className='hover:text-red-500'>Axiom</li>
			</ul>
		</div>
	);
};

export default body;
