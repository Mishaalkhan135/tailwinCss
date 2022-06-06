import React from "react";

const navbar = () => {
	return (
		<div className='flex justify-between items-center p-6 w-full absolute z-[100]'>
			<h1 className='text-4xl text-red-600 font-bold cursor-pointer'>
				Netflix
			</h1>
			<div>
				<button className='text-white pr-4'>Sign In</button>
				<button className='bg-red-600 px-6 py-2 cursor-pointer text-white'>
					Logout
				</button>
			</div>
		</div>
	);
};

export default navbar;
