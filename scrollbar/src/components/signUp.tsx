import React from "react";

const signUp = () => {
	return (
		<div className='bg-black grid md:grid-cols-2 '>
			<section className='text-justify p-2 mt-[9vh]'>
				<h1 className='text-xl md:text-3xl mb-5 text-white font-serif italic underline'>
					Details
				</h1>
				<p className='text-md md:text-xl text-white font-serif italic'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Accusamus aliquid unde nemo possimus harum excepturi
					pariatur magni, veritatis debitis, iusto quae officia
					eveniet odit explicabo labore distinctio. Tenetur
					necessitatibus, modi sunt officia corporis dignissimos
					consequatur quibusdam corrupti deleniti mollitia! Aspernatur
					neque, odit ipsa quibusdam pariatur omnis qui quia earum
					exercitationem molestiae nulla beatae soluta totam
					voluptatibus, eius modi animi id.
				</p>
			</section>
			<div className='flex justify-center items-center px-10 py-16 bg-black text-white'>
				<form className='w-full'>
					<h1 className='text-xl md:text-3xl text-white text-center font-serif italic underline'>
						Registration Form
					</h1>
					<label className='text-black'>
						<span className='block underline md:text-xl text-lg p-1 font-medium text-gray-500'>
							Username
						</span>
						<input
							type='text'
							className='peer ... text-xl rounded-lg p-[10px] w-full'
							placeholder='Enter Username'
						/>
						<p className='invisible peer-invalid:visible text-red-600 text-sm'>
							Enter valid Email.
						</p>
					</label>
					<label className='text-black'>
						<span className='block underline md:text-xl text-lg  p-1 font-medium text-gray-500'>
							Email
						</span>
						<input
							type='email'
							className='peer ... text-xl rounded-lg p-[10px] w-full'
							placeholder='Enter Email'
						/>
						<p className='invisible peer-invalid:visible text-red-600 text-sm'>
							Enter valid Email.
						</p>
					</label>
					<label className='text-black'>
						<span className='block underline md:text-xl text-lg  p-1 font-medium text-gray-500'>
							Password
						</span>
						<input
							type='password'
							className='peer ... text-xl rounded-lg p-[10px] w-full'
							placeholder='Enter Password'
						/>
						<p className='invisible peer-invalid:visible text-red-600 text-sm'>
							Enter valid Password.
						</p>
					</label>
					<div className='text-center'>
						<button className='bg-green-500 w-32 h-12 rounded-xl'>
							SIgn Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default signUp;
