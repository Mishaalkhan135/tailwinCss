import React from "react";
import {
	FaDribbbleSquare,
	FaFacebookSquare,
	FaGithubSquare,
	FaTwitterSquare,
	FaInstagram,
} from "react-icons/fa";

const footer = () => {
	return (
		<div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3  gap-8 text-gray-300'>
			<div>
				<h1 className='w-full text-3xl font-bold text-[#00df9a]'>
					React.
				</h1>
				<p className='py-4'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
				<div className='flex justify-between sm:-w-[75%] my-7'>
					<FaFacebookSquare size={30} />
					<FaInstagram size={30} />
					<FaTwitterSquare size={30} />
					<FaGithubSquare size={30} />
					<FaDribbbleSquare size={30} />
				</div>
			</div>
			<div className='lg:col-span-2 flex justify-between mt-6 sm:text-2xl text-sm'>
				<div className='font:md text-gray-500'>
					<h6 className='underline font-bold'>Solutions</h6>
					<ul>
						<li className='py-2 text-sm'>Analytics</li>
						<li className='py-2 text-sm'>Marketing</li>
						<li className='py-2 text-sm'>Commerce</li>
						<li className='py-2 text-sm'>Insights</li>
					</ul>
				</div>
				<div className='font-md text-gray-500'>
					<h6 className='underline font-bold'>Support</h6>
					<ul>
						<li className='py-2 text-sm'>Pricing</li>
						<li className='py-2 text-sm'>Documents</li>
						<li className='py-2 text-sm'>Guides</li>
						<li className='py-2 text-sm'>API status</li>
					</ul>
				</div>
				<div className='font-md text-gray-500'>
					<h6 className='underline font-bold'>Conpany</h6>
					<ul>
						<li className='py-2 text-sm'>About</li>
						<li className='py-2 text-sm'>Blogs</li>
						<li className='py-2 text-sm'>Jobs</li>
						<li className='py-2 text-sm'>Press</li>
						<li className='py-2 text-sm'>Careers</li>
					</ul>
				</div>
				<div className='font-md text-gray-500'>
					<h6 className='underline font-bold'>Legal</h6>
					<ul>
						<li className='py-2 text-sm'>Claim</li>
						<li className='py-2 text-sm'>Policies</li>
						<li className='py-2 text-sm'>Terms</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default footer;
