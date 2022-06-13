import React from "react";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const ProductPage = () => {
	return (
		<div>
			<Navbar />
			<div className='flex justify-center'>
				<div className='flex flex-1 justify-center items-center'>
					<img
						src='https://tse3.mm.bing.net/th?id=OIP.O9rWwrIMaHc9rS1JnXIUlQHaHa&pid=Api&P=0&w=168&h=168'
						alt='Image for discription'
						className='w-[80%] h-[80%] rounded-lg hover:scale-[1.1] shadow-2xl ease-in duration-300'
					/>
				</div>
				<div className='flex-[1.3] flex p-2 flex-col mt-10 justify-items-start'>
					<h1 className='text-[40px]'>T-shirt original cotton</h1>
					<p className='text-justify'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cupiditate minima nesciunt, quam neque veritatis maxime
						alias beatae numquam, pariatur temporibus impedit.
						Repellat repellendus dolor exercitationem dolore impedit
						mollitia ducimus officiis architecto corrupti fugit.
						Quae itaque voluptatem, modi sed laborum rem cum odit
						eligendi id sequi? Corporis accusamus ipsam harum quo
					</p>
					<p className='mt-7 text-3xl'>
						Price: <b>$70</b>
					</p>
					{/* Color variants */}
					<div className='flex text-2xl mt-7'>
						Colors
						<div className='bg-red-500 rounded-full  w-[2rem] h-[2rem] border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4df3]'></div>
						<div className='bg-green-600 rounded-full  w-[2rem] h-[2rem] border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4df3]'></div>
						<div className='bg-blue-500 rounded-full  w-[2rem] h-[2rem] border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4df3]'></div>
					</div>

					<div className='mt-7 text-2xl'>
						Size
						<select className='ml-5 border-2'>
							<option selected disabled>
								Select
							</option>
							<option>Small</option>
							<option>Medium</option>
							<option>Large</option>
						</select>
					</div>
					<div className='flex justify-self-start mt-5'>
						<Counter />
					</div>
					<button className='btn flex w-1/4 justify-center text-center  text-white bg-[#8a4df3] rounded-md md:p-3 p-2 hover:scae-[1.1] mt-5 ease-in duration-100 cursor-pointer hover:bg-blue-500'>
						Add to cart
					</button>
				</div>
			</div>
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default ProductPage;
