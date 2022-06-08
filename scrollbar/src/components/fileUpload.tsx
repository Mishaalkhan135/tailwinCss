import React from "react";

const fileInput = () => {
	return (
		<div className='flex items-center justify-center  w-[100%] h-36 bg-black shadow-2xl'>
			<form className='flex flex-row justify-center items-center bg-white rounded-lg'>
				<div>
					<img
						className='h-20 w-20 object-cover rounded-md'
						src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80'
						alt='Current profile photo'
					/>
				</div>
				<label className='block p-6'>
					<span className='sr-only'>Choose profile photo</span>
					<input
						type='file'
						className='block w-full text-sm text-slate-500'
					/>
				</label>
			</form>
		</div>
	);
};

export default fileInput;
