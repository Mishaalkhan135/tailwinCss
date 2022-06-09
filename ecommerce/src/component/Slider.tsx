import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { ApiSlider } from "../Api/sliderApi";
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
				<ArrowLeftOutlined
					className='rounded-full bg-gray-500 flex justify-center items-center shadow-sm hover:cursor-pointer mr-3'
					style={{ fontSize: "50px" }}
					onClick={prevSlide}
				/>
			</div>
			{/* slide div */}
			{slides.map((slide, index) => {
				if (index === activeSlide) {
					return (
						<div className='wrapper w-full h-[500px] flex justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0c] border-10px overflow-hidden relative'>
							<div className='slide flex justify-center items-center h-[100%]'>
								<div className='Forimage flex flex-1 justify-center items-center h-[100%]'>
									<img
										className='h-[100%] w-full object-cover'
										src={slide.src}
										alt='image for slider'
									/>
								</div>
								<div className='description p-6'>
									<h2 className='text-[33px]'>
										{slide.content.h2}
									</h2>
									<p className='text-[30px]'>
										{slide.content.p}
									</p>
									<button className='btn text-white bg-[#8a4df3] rounded-md p-3 hover:scale-[1.1] ease-in duration-100 cursor-pointer hover:bg-blue-500 '>
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
				<ArrowRightOutlined
					className='rounded-full bg-gray-500 flex justify-center items-center shadow-sm hover:cursor-pointer ml-3'
					style={{ fontSize: "50px" }}
					onClick={nextSlide}
				/>
			</div>
		</div>
	);
};

export default Slider;
