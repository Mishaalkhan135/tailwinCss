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
				<div className='flex justify-between sm:-w-[75%] my-7 '>
					<a href='https://www.facebook.com/' target='_blank'>
						<FaFacebookSquare
							size={30}
							className='hover:bg-red-500 hover:fill-black  ease-in-out hover:rounded-md duration-100'
						/>
					</a>
					<a href='https://www.instagram.com/' target='_blank'>
						<FaInstagram
							size={30}
							className='hover:bg-red-500 hover:fill-black  ease-in-out hover:rounded-md duration-100'
						/>
					</a>
					<a href='https://twitter.com/' target='_blank'>
						<FaTwitterSquare
							size={30}
							className='hover:bg-red-500 hover:fill-black  ease-in-out hover:rounded-md duration-100'
						/>
					</a>
					<a
						href='https://search.yahoo.com/search;_ylt=Awr9Ds3rV6diK6QAqFVXNyoA;_ylc=X1MDMjc2NjY3OQRfcgMyBGZyA21jYWZlZQRmcjIDc2ItdG9wBGdwcmlkAzV6bGdSd3VVUlV5VlREOURBdFVpdEEEbl9yc2x0AzAEbl9zdWdnAzEwBG9yaWdpbgNzZWFyY2gueWFob28uY29tBHBvcwMxBHBxc3RyAwRwcXN0cmwDMARxc3RybAM2BHF1ZXJ5A0dpdEh1YgR0X3N0bXADMTY1NTEzNDIxNA--?p=GitHub&fr2=sb-top&fr=mcafee&type=E210US91213G0&d=%7B%22dn%22%3A%22yk%22%2C%22subdn%22%3A%22digitalservice%22%2C%22ykid%22%3A%22fb75594e-e832-3e45-bc55-21c995fa0800%22%7D&fd=%7B%22imageUrl%22%3A%22https%3A%2F%2Fs.yimg.com%2Fzb%2Fimgv1%2F9414c653-06be-3f9b-8af2-09b97b7c6c2d%2Ft_140x140%22%7D'
						target='_blank'
					>
						<FaGithubSquare
							size={30}
							className='hover:bg-red-500 hover:fill-black  ease-in-out hover:rounded-md duration-100'
						/>
					</a>
					<a href='https://dribbble.com/' target='_blank'>
						<FaDribbbleSquare
							size={30}
							className='hover:bg-red-500 hover:fill-black  ease-in-out hover:rounded-md duration-100'
						/>
					</a>
				</div>
			</div>
			<div className='lg:col-span-2 flex justify-between mt-6 sm:text-2xl text-sm'>
				<div className='font:md text-gray-300'>
					<h6 className='underline font-bold'>Solutions</h6>
					<ul>
						<li className='py-2 text-sm'>Analytics</li>
						<li className='py-2 text-sm'>Marketing</li>
						<li className='py-2 text-sm'>Commerce</li>
						<li className='py-2 text-sm'>Insights</li>
					</ul>
				</div>
				<div className='font-md text-gray-300'>
					<h6 className='underline font-bold'>Support</h6>
					<ul>
						<li className='py-2 text-sm'>Pricing</li>
						<li className='py-2 text-sm'>Documents</li>
						<li className='py-2 text-sm'>Guides</li>
						<li className='py-2 text-sm'>API status</li>
					</ul>
				</div>
				<div className='font-md text-gray-300'>
					<h6 className='underline font-bold'>Conpany</h6>
					<ul>
						<li className='py-2 text-sm'>About</li>
						<li className='py-2 text-sm'>Blogs</li>
						<li className='py-2 text-sm'>Jobs</li>
						<li className='py-2 text-sm'>Press</li>
						<li className='py-2 text-sm'>Careers</li>
					</ul>
				</div>
				<div className='font-md text-gray-300'>
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
