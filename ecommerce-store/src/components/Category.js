import React from "react";

const Category = ({ item, key }) => {
	return (
		<div
			key={key}
			className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'
		>
			<img src={item.src} className='w-[100%]' alt='categories images' />
			<div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
				<h2 className='text-white font-medium text-xl'>{item.title}</h2>
				<button className='btn flex justify-center text-center  text-white bg-[#8a4df3] rounded-md md:p-3 p-2 hover:scale-[1.1] mt-5 ease-in duration-100 cursor-pointer hover:bg-blue-500 '>
					See more
				</button>
			</div>
		</div>
	);
};

export default Category;
