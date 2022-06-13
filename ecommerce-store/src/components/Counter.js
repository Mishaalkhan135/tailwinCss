import React from "react";

const Counter = () => {
	return (
		<div>
			<div className='flex justify-center items-center text-2xl'>
				Quantity
				<div className='ml-5 shadow-xl flex'>
					<div className='bg-[#8a4af3] rounded-l-md text-white w-8 flex justify-center items-center cursor-pointer'>
						-
					</div>
					<div className='w-8 flex items-center justify-center border-[1px] border-[#8a4af3]'>
						1
					</div>
					<div className='bg-[#8a4af3] rounded-r-md text-white w-8 flex justify-center items-center cursor-pointer'>
						+
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;
