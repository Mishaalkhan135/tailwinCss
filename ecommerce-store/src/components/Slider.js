import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";
import { ApiSlider } from "../Api/Slider";
import "./slider.css";
const Slider = () => {
	const [slides] = useState(ApiSlider);
	const [activeSlide, setActiveSlide] = useState(0);
	const nextSlide = () => {
		if (activeSlide === slides.length - 1) {
			setActiveSlide(0);
		} else {
			setActiveSlide(activeSlide + 1);
		}
	};
	const prevSlide = () => {
		if (activeSlide === 0) {
			setActiveSlide(slides.length - 1);
		} else {
			setActiveSlide(activeSlide - 1);
		}
	};

	return (
		<div className=' h-[540px] flex justify-between items-center px-6'>
			{/* left arrow div */}
			<div className='leftarrow'>
				<FaChevronLeft
					size={30}
					className='rounded-full bg-gray-500 flex justify-center items-center shadow-sm hover:cursor-pointer mr-3'
					onClick={prevSlide}
				/>
			</div>
			{/* slide div */}
			{slides.map((slide, index) => {
				if (index === activeSlide) {
					return (
						<div className='wrapper w-full md:h-[500px] flex  justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0c] border-10px overflow-hidden relative'>
							<div className='slide flex md:flex-row flex-col justify-center items-center md:h-[100%] h-80'>
								<div className='Forimage flex flex-1 justify-center items-center h-[100%]'>
									<img
										className='md:h-[100%] h-36 md:w-full w-52 object-cover'
										src={slide.src}
										alt='image for slider'
									/>
								</div>
								<div className='description p-6'>
									<h2 className='md:text-[33px] text-sm'>
										{slide.content.h2}
									</h2>
									<p className='md:text-[30px] text-sm mt-5'>
										{slide.content.p}
									</p>
									<button className='btn flex justify-center text-center md:ml-36 ml-5 text-white bg-[#8a4df3] rounded-md md:p-3 p-2 hover:scale-[1.1] mt-5 ease-in duration-100 cursor-pointer hover:bg-blue-500 '>
										Shop Now
									</button>
								</div>
							</div>
						</div>
					);
				}
			})}
			{/* right arrow div */}
			<div className='rightarrow'>
				<FaChevronRight
					size={30}
					className='rounded-full bg-gray-500 flex justify-center items-center shadow-sm hover:cursor-pointer ml-3'
					style={{ fontSize: "50px" }}
					onClick={nextSlide}
				/>
			</div>
		</div>
	);
};

export default Slider;
