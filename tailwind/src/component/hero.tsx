import React from "react";

const hero = () => {
	return (
		<div className='text-white '>
			<div className='mt-[-96px]  w-full h-screen text-center flex flex-col justify-center uppercase'>
				<p className='text-[#00df9a] font-bold p-2'>
					Growing with data analytics
				</p>
				<h1 className='md:text-7xl sm:6xl text-4xl font-bold md:py-6 md:px-5'>
					Grow With data
				</h1>
				<div>
					<p className='md:text-5xl sm:text-4xl text-xl font-bold'>
						fast, flexible financing
					</p>
					<button className='bg-green-600 rounded w-32 h-12 mt-5'>
						Get started
					</button>
				</div>
			</div>
		</div>
	);
};

export default hero;
