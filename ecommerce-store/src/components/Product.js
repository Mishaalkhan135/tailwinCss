import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
const Product = ({ item, key }) => {
	const [hoverEffects, setHoverEffects] = useState(" opacity-0");
	const handleHoverEffect = () => {
		setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0.1)]");
	};
	const handleHoverLeave = () => {
		setHoverEffects(" opacity-0");
	};
	const iconStyle =
		"h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center m-3 curser-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";
	return (
		<div
			className='flex flex-1 items-center justify-center min-w-[250px] min-h-[335px] overflow-hidden rounded-md shadow-lg m-2 relative'
			onMouseEnter={handleHoverEffect}
			onMouseLeave={handleHoverLeave}
		>
			<img src={item.src} alt='Product images' />
			<div
				className={
					`flex items-center justify-center w-[100%] h-[100%s] absolute ease-in duration-100` +
					hoverEffects
				}
			>
				<div className={iconStyle}>
					<FaShoppingCart />
				</div>
				<div className={iconStyle}>
					<IoIosHeartEmpty />
				</div>
				<div className={iconStyle}>
					<FaSearch />
				</div>
			</div>
		</div>
	);
};

export default Product;
