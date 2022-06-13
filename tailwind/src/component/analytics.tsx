import React from "react";
import Apple from "../assets/apple.svg";
const analytics = () => {
	return (
		<div className='w-full bg-white py-16 '>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2 shadow-2xl p-10'>
				<img
					className='w-[300px] mx-auto my-4'
					src={Apple}
					alt='image for div'
				/>
				<div className='text-center  flex flex-col justify-center font-serif italic'>
					<p className='text-[#00df9a] text-2xl'>
						This is Data Analytics
					</p>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
						Manage data analytics centrally
					</h1>
					<p className='text-justify'>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Cumque at, nisi ipsum debitis deleniti molestiae
						voluptatum, rem ad eaque animi delectus veritatis
						soluta, officiis quos! Animi fugiat repudiandae
						voluptates esse!
					</p>
					<button className='bg-green-600 text-white rounded w-32 h-12 mx-auto mt-5 mb-5  border-2 border-gray-300'>
						Get started
					</button>
				</div>
			</div>
		</div>
	);
};

export default analytics;
