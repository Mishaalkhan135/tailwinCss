import React from "react";
import { dataImages } from "../data/data";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const scrollbar = () => {
	const sliderLeft = () => {
		var slider: any = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const sliderRight = () => {
		var slider: any = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 500;
	};
	return (
		<div className='bg-white shadow-2xl px-10 w-[100%]'>
			<h1 className='text-red-500 text-center underline text-6xl font-serif p-4 italic'>
				Scrolling Images
			</h1>
			<div className='relative flex justify-center items-center py-8'>
				<MdChevronLeft
					size={40}
					className='bg-black fill-white rounded-full opacity-50 cursor-pointer hover:opacity-100 mr-1'
					onClick={sliderLeft}
				/>
				<div
					id='slider'
					className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide p-2'
				>
					{dataImages.map((item) => (
						<img
							className='w-[300px] h-[180px] inline-block p-2 bg-cover hover:scale-105 ease-in-out duration-300'
							src={item.img}
							alt='/'
						/>
					))}
				</div>
				<MdChevronRight
					size={40}
					className='bg-black fill-white  rounded-full opacity-50 cursor-pointer ml-3 hover:opacity-100 '
					onClick={sliderRight}
				/>
			</div>
		</div>
	);
};

export default scrollbar;
