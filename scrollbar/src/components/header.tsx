import React from "react";
import paypal from "../assets/paypal.svg";
const header = () => {
	return (
		<div className='flex justify-between items-center p-2 bg-red-900'>
			<div className='bg-black rounded-3xl w-36 flex justify-center items-center shadow-2xl'>
				<img
					className='sm:w-20 w-10'
					src={paypal}
					alt='logo for header'
				/>
			</div>
			<h1 className='coloredTexth1'>Mishaal khan</h1>
		</div>
	);
};

export default header;
