import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";

const Navbar = () => {
	const style = "text-[14px] cursor-pointer ml-[25px]";
	return (
		<div className='navbar h-[60px] shadow-md ralative z-10'>
			<div className='wrapper flex justify-between items-center pr-[20px] pl-[20px] pt-[10px] pb-[10px]'>
				{/* Left navbar  */}
				<div className='left flex flex-1 items-center'>
					<div className='langaue cursor-pointer text-[16px]'>En</div>
					<div className='searchInput flex border-[2px] border-solid border-lightgray rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] tarnsition-all'>
						<input className='input outline-none ' type='text' />
						<Search className='' style={{ fontSize: "18px" }} />
					</div>
				</div>
				{/* logo of navbar  */}
				<div className='flex flex-1 justify-center'>
					<div className='logo font-bold text-lg'>Summer Kings</div>
				</div>
				{/* Right navbar  */}
				<div className='flex flex-1 items-center justify-end'>
					<div className={style}>Register</div>
					<div className={style}>Sign Up</div>
					<div className={style}>
						<Badge badgeContent={2} color='primary'>
							<ShoppingCartOutlined />
						</Badge>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
