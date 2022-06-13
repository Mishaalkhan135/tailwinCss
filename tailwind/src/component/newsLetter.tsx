import React from "react";

const newsLetter = () => {
	return (
		<div className='text-white w-full py-16 px-4'>
			<div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
				<div className='lg:col-span-2 font-serif italic'>
					<h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>
						Want tips and tricks to optimize your flow
					</h1>
					<p>Sign Up our NewsLetters and stay upto date.</p>
				</div>
				<div className='flex flex-col sm:flex-row justify-centers items-center mt-5'>
					<input
						className='p-3 w-full rounded-md text-black '
						type='email'
						placeholder='Enter Email'
					/>
					<button className='bg-green-600 rounded w-32 h-12 mx-2 my-4  border-2 border-gray-300'>
						Notify Me
					</button>
				</div>
			</div>
		</div>
	);
};

export default newsLetter;
