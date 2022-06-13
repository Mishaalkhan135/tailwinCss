import React from "react";
import Apple from "../assets/apple.svg";
import Github from "../assets/github.svg";
import Pinterest from "../assets/pinterest.svg";

const cards = () => {
	return (
		<div className='w-full py-[10rem] px-4 bg-white'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
				<div className='w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300'>
					<img
						className='w-32 mx-auto mt-[-4rem] bg-white shadow-lg rounded-full p-4'
						src={Apple}
						alt='Logo for cards '
					/>
					<p className='text-2xl py-4 font-bold text-center underline'>
						Single User
					</p>
					<h1 className='text-xl py-4 font-bold text-center'>$150</h1>
					<div className='text-lg py-4 font-bold text-center'>
						<p className='border-b mx-8 py-1'>500 GB storage</p>
						<p className='border-b mx-8 py-1'>Granted User</p>
						<p className='border-b mx-8 py-1'>Send upto 2 GB</p>
						<button className='bg-green-600 text-white rounded w-32 h-12 mx-auto mt-8 mb-5  border-2 border-gray-300'>
							Start Trail
						</button>
					</div>
				</div>
				<div className='w-full shadow-xl flex flex-col rounded-lg py-10 hover:scale-105 duration-300'>
					<img
						className='w-32 mx-auto mt-[-4rem] bg-white shadow-lg rounded-full p-4'
						src={Pinterest}
						alt='Logo for cards '
					/>
					<p className='text-2xl py-4 font-bold text-center underline'>
						Single User
					</p>
					<h1 className='text-xl py-4 font-bold text-center'>$300</h1>
					<div className='text-lg py-4 font-bold text-center'>
						<p className='border-b mx-8 py-1'>500 GB storage</p>
						<p className='border-b mx-8 py-1'>Granted User</p>
						<p className='border-b mx-8 py-1'>Send upto 2 GB</p>
						<button className='bg-green-600 text-white rounded w-32 h-12 mx-auto mt-8 mb-5  border-2 border-gray-300'>
							Start Trail
						</button>
					</div>
				</div>
				<div className='w-full shadow-xl flex flex-col rounded-lg py-10 hover:scale-105 duration-300'>
					<img
						className='w-32 mx-auto mt-[-4rem] bg-white shadow-lg rounded-full p-4'
						src={Github}
						alt='Logo for cards '
					/>
					<p className='text-2xl py-4 font-bold text-center underline'>
						Single User
					</p>
					<h1 className='text-xl py-4 font-bold text-center'>$500</h1>
					<div className='text-lg py-4 font-bold text-center'>
						<p className='border-b mx-8 py-1'>500 GB storage</p>
						<p className='border-b mx-8 py-1'>Granted User</p>
						<p className='border-b mx-8 py-1'>Send upto 2 GB</p>
						<button className='bg-green-600 text-white rounded w-32 h-12 mx-auto mt-8 mb-5 transition duration-150 ease-in-out  border-2 border-gray-300'>
							Start Trail
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default cards;
