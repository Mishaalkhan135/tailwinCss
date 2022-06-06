import React from "react";
import { dataImages } from "../data/data";

const scrollbar = () => {
	return (
		<div className='relative flex items-center cursor-pointer hover:scale-105 ease-in-out duration-300'>
			{dataImages.map((item) => (
				<img
					className='w-[220px] inline-block p-2'
					src={item.img}
					alt='/'
				/>
			))}
		</div>
	);
};

export default scrollbar;
