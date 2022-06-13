import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

const Category = () => {
	return (
		<div>
			<Navbar />
			<div className='flex flex-col p-5'>
				<h1 className='text-[30px]'>Mens cloth</h1>
				<div className='flex justify-between items-center mt-3'>
					<div className='flex'>
						<p>Filter by</p>
						<select className='ml-3 border-2 border-silver'>
							<option selected disabled>
								Size
							</option>
							<option>Small</option>
							<option>Medium</option>
							<option>Large</option>
						</select>
						<select className='ml-3 border-2 border-silver'>
							<option selected disabled>
								Color
							</option>
							<option>Red</option>
							<option>Yellow</option>
							<option>blue</option>
						</select>
					</div>
					<div className='flex'>
						<p>Sort by </p>
						<select className='ml-3 border-2 boder-selver'>
							<option>Newset (first)</option>
							<option>Oldest (first)</option>
							<option>Price (Asc)</option>
							<option>Price (Des)</option>
						</select>
					</div>
				</div>
			</div>
			<Products />
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default Category;
