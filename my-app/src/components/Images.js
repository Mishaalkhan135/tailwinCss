import React, { useState } from "react";
import storeSolid from "../assets/icons/store-solid.svg";
import walletSolid from "../assets/icons/wallet-solid.svg";
import screwdriverSolid from "../assets/icons/screwdriver-wrench-solid.svg";
import buildingColumnsSolid from "../assets/icons/building-columns-solid.svg";

import moneyBillTransferSolid from "../assets/icons/money-bill-transfer-solid.svg";
import peopleGroupSolid from "../assets/icons/people-group-solid.svg";

import chevronLeftSolid from "../assets/icons/chevron-left-solid.svg";
import chevronRightSolid from "../assets/icons/chevron-right-solid.svg";

const Content = () => {
	// State for Scrollable Element
	const [leftSpace, setLeftSpace] = useState(false);

	// Function for scroll-left button
	const scrollLeft = () => {
		const scrollAmount = 300;
		const container = document.getElementById(
			"horizontal-scrollable-container"
		);
		const space = container.scrollLeft;
		container?.scrollTo({
			behavior: "smooth",
			left: space < scrollAmount ? 0 : space - scrollAmount,
		});
	};

	// Function for scroll-right button
	const scrollRight = () => {
		const scrollAmount = 300;
		const container = document.getElementById(
			"horizontal-scrollable-container"
		);
		const space =
			container.scrollWidth -
			container.scrollLeft -
			container.clientWidth;
		container?.scrollTo({
			behavior: "smooth",
			left:
				space < scrollAmount
					? container.scrollWidth
					: container.scrollLeft + scrollAmount,
		});
	};

	return (
		<div className='flex flex-col align-middle justify-center'>
			{/* =================================================================================== */}
			{/* SECTION - 01 : Six Cards with Horizontal Scroll */}
			{/* =================================================================================== */}
			<section className='relative flex flex-row align-middle justify-center w-full bg-gradient-to-l from-zinc-100 to-zinc-200 overflow-hidden px-8 sm:px-20 xl:px-28'>
				{/* Horizontal Scrollable Container */}
				<div
					id='horizontal-scrollable-container'
					className='horizontal-scrollable-container w-full flex flex-row overflow-x-scroll overflow-y-hidden gap-4 py-8'
					onScroll={() => {
						const container = document.getElementById(
							"horizontal-scrollable-container"
						);
						const leftButton =
							document.getElementById("scroll-left");
						const rightButton =
							document.getElementById("scroll-right");
						if (container.scrollLeft === 0) {
							leftButton.style.visibility = "hidden";
						} else {
							leftButton.style.visibility = "visible";
						}
						if (
							container.scrollLeft + container.clientWidth + 1 >=
							container?.scrollWidth
						) {
							rightButton.style.visibility = "hidden";
						} else {
							rightButton.style.visibility = "visible";
						}
					}}
				>
					{/* Card - 1 */}
					<div className='bg-white rounded-3xl shadow-md shadow-zinc-300 p-[40px] mx-auto md:mx-0 gap-5 min-w-[300px] sm:min-w-[313px] h-[200px] sm:h-[250px]'>
						<img
							src={storeSolid}
							alt='icon'
							className='h-[40px] mx-auto mb-2'
						/>
						<p className='sf-pro-display-font mx-auto text-left text-zinc-700 text-[24px]'>
							Discover and subscribe in the{" "}
							<span className='text-[#3867d6] sf-pro-display-font'>
								API Store
							</span>
						</p>
					</div>
					{/* Card - 2 */}
					<div className='bg-white rounded-3xl shadow-md shadow-zinc-300 p-[40px] mx-auto md:mx-0 gap-5 min-w-[300px] sm:min-w-[313px] h-[200px] sm:h-[250px]'>
						<img
							src={walletSolid}
							alt='icon'
							className='h-[40px] mx-auto mb-2'
						/>
						<p className='sf-pro-display-font mx-auto text-left text-zinc-700 text-[24px]'>
							No surprise billing,{" "}
							<span className='text-[#ffbe00] sf-pro-display-font'>
								only pay for what you use
							</span>
						</p>
					</div>
					{/* Card - 3 */}
					<div className='bg-white rounded-3xl shadow-md shadow-zinc-300 p-[40px] mx-auto md:mx-0 gap-5 min-w-[300px] sm:min-w-[313px] h-[200px] sm:h-[250px]'>
						<img
							src={screwdriverSolid}
							alt='icon'
							className='h-[40px] mx-auto mb-2'
						/>
						<p className='sf-pro-display-font  mx-auto text-left text-zinc-700 text-[24px]'>
							Build and Deploy APIs with our{" "}
							<span className='text-[#95a5a6] sf-pro-display-font'>
								Developer tools
							</span>
						</p>
					</div>
					{/* Card - 4 */}
					<div className='bg-white rounded-3xl shadow-md shadow-zinc-300 p-[40px] mx-auto md:mx-0 gap-5 min-w-[300px] sm:min-w-[313px] h-[200px] sm:h-[250px]'>
						<img
							src={buildingColumnsSolid}
							alt='icon'
							className='h-[40px] mx-aut2 mb-2'
						/>
						<p className='sf-pro-display-font mx-auto text-left text-zinc-700 text-[24px]'>
							<span className='text-[#ff2800] sf-pro-display-font'>
								Smart Contracts
							</span>{" "}
							for Governance & Revenue Sharing
						</p>
					</div>
					{/* Card - 5 */}
					<div className='bg-white rounded-3xl shadow-md shadow-zinc-300 p-[40px] mx-auto md:mx-0 gap-5 min-w-[300px] sm:min-w-[313px] h-[200px] sm:h-[250px]'>
						<img
							src={moneyBillTransferSolid}
							alt='icon'
							className='h-[40px] mx-a2to mb-2'
						/>
						<p className='sf-pro-display-font mx-auto text-left text-zinc-700 text-[24px]'>
							Trade freely on our{" "}
							<span className='text-[#2ecc71] sf-pro-display-font'>
								API Exchange
							</span>
						</p>
					</div>
					{/* Card - 6 */}
					<div className='bg-white rounded-3xl shadow-md shadow-zinc-300 p-[40px] mx-auto md:mx-0 gap-5 min-w-[300px] sm:min-w-[313px] h-[200px] sm:h-[250px]'>
						<img
							src={peopleGroupSolid}
							alt='icon'
							className='h-[40px] mx-auto mb-2'
						/>
						<p className='sf-pro-display-font  mx-auto text-left text-zinc-700 text-[24px]'>
							A{" "}
							<span className='text-[#6495ED] sf-pro-display-font'>
								Community
							</span>{" "}
							of developers and investors
						</p>
					</div>

					{/* Scroll Controls */}
					<div>
						{/* Left Scroll */}
						<button
							id='scroll-left'
							className='invisible absolute left-0 top-[50%] -translate-y-1/2 z-20 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex text-center align-middle justify-center border-0 rounded-full bg-zinc-400 mx-4 sm:mx-8 opacity-[90%]'
							onClick={scrollLeft}
						>
							<img
								src={chevronLeftSolid}
								alt='icon'
								className='w-[15px] sm:w-[20px] my-auto'
							/>
						</button>
						{/* Right Scroll */}
						<button
							id='scroll-right'
							className='absolute right-0 top-[50%] -translate-y-1/2 z-20 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex text-center align-middle justify-center border-0 rounded-full bg-zinc-400 mx-4 sm:mx-8 opacity-[90%]'
							onClick={scrollRight}
						>
							<img
								src={chevronRightSolid}
								alt='icon'
								className='w-[15px] sm:w-[20px] my-auto'
							/>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Content;
