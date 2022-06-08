import React, { useState } from "react";
import circle from "../assets/circle.svg";
import paypal from "../assets/paypal.svg";
import settings from "../assets/settings.svg";
import file from "../assets/file.svg";
import analytics from "../assets/analytics.svg";
import search from "../assets/search.svg";
import schedule from "../assets/schedule.svg";
import account from "../assets/account.svg";
import inbox from "../assets/inbox.svg";
import dashboard from "../assets/dashboard.svg";
const SideBar = () => {
	const [open, setOpen] = useState(true);
	const menus = [
		{
			title: "Dashboard",
			imgs: dashboard,
		},
		{
			title: "Inbox",
			imgs: inbox,
		},
		{
			title: "Accounts",
			imgs: account,
			gap: true,
		},
		{
			title: "Schedule",
			imgs: schedule,
		},
		{
			title: "Search",
			imgs: search,
		},
		{
			title: "Analytics",
			imgs: analytics,
		},
		{
			title: "Files",
			imgs: file,
			gap: true,
		},
		{
			title: "Settings",
			imgs: settings,
		},
	];
	return (
		<div className='flex'>
			<div
				className={`${
					open ? "w-72" : "w-20"
				} h-screen bg-blue-900 relative duration-300 p-5 pt-8`}
			>
				<img
					src={circle}
					alt='logo for sidebar'
					className={`absolute cursor-pointer -right-3 top-9 w-7 ${
						!open && "rotate-180"
					}`}
					onClick={() => setOpen(!open)}
				/>
				<div className='flex gap-x-4 items-center'>
					<img
						src={paypal}
						alt='logo'
						className={`w-10 cursor-pointer duration-500 ${
							open && "rotate-[360deg]"
						}`}
					/>
					<h1
						className={`text-white orign-left font-medium text-xl duration-300 ${
							!open && "scale-0"
						}`}
					>
						Designer
					</h1>
				</div>
				<ul className='pt-6'>
					{menus.map((menu, index) => (
						<li
							key={index}
							className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 rounded-md ${
								menu.gap ? "mt-9" : "mt-2"
							}${index === 0 && "bg-gray-800"}`}
						>
							<img
								className='w-6'
								src={menu.imgs}
								alt='logo for menu'
							/>
							<span
								className={`${
									!open && "hidden"
								} origin-left duration-200`}
							>
								{menu.title}
							</span>
						</li>
					))}
				</ul>
			</div>

			<div className='p-7 text-7xl font-semibold flex-1 h-screen'>
				<h1>Home Page</h1>
			</div>
		</div>
	);
};

export default SideBar;
