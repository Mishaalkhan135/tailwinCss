import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Counter from "../components/Counter";

const Cart = () => {
	return (
		<div>
			<Navbar />
			<div className='m-4'>
				<div className='flex justify-center text-5xl'>Cart</div>
				<div className='flex justify-between items-center mt-4'>
					<button className='btn flex justify-center text-center  bg-white text-[#8a4df3] border-2 border-[#8a4df3]  rounded-md md:p-3 p-2 hover:scale-[1.1] mt-5 ease-in duration-100 cursor-pointer hover:bg-white '>
						Shopping Continue
					</button>
					<div className='flex underline text-lg hover:cursor-pointer'>
						<p>Items in your Cart : 3</p>
						<p className='ml-5'>Whitlist Item : 0</p>
					</div>
					<button className='btn flex justify-center text-center  text-white bg-[#8a4df3] rounded-md md:p-3 p-2 hover:scale-[1.1] mt-5 ease-in duration-100 cursor-pointer hover:bg-blue-500 '>
						Checkout
					</button>
				</div>
				{/* Central Div */}
				<div className='flex mt-7'>
					<div className='flex flex-col flex-1'>
						{/* List of products */}
						<div className='flex w-[100%] h-auto items-center '>
							<div className='flex self-start pl-5'>
								<img
									className='w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-100'
									src='https://tse4.mm.bing.net/th?id=OIP.ZEeh0hGfLdBAQ7Vy8l_A3AHaIb&pid=Api&P=0&w=147&h=167'
									alt='image for cart'
								/>
								<div className='flex flex-col ml-5 h-auto justify-between'>
									<p>
										<b className='mr-2'>ID: </b>1234526
									</p>

									<p>
										<b className='mr-2'>Product: </b>Dazzing
										Sky Shirt
									</p>
									<p className='flex items-center justify-start'>
										<b>Color: </b>
										<div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]'></div>
									</p>
									<p>
										<b className='mr-2'>Size: </b>lg
									</p>
								</div>
							</div>
							<div className='flex flex-auto flex-col justify-center items-center'>
								<Counter />
								<p className='flex items-center justify-center text-4xl mt-3'>
									<b>$70</b>
								</p>
							</div>
						</div>
						<hr className='mt-7 mb-7' />
						{/* 2nd product */}
						<div className='flex w-[100%] h-auto items-center'>
							<div className='flex self-start pl-5'>
								<img
									className='w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-100'
									src='https://tse4.mm.bing.net/th?id=OIP.Y38qZxqbhGi6cD23359ipQHaHa&pid=Api&P=0&w=174&h=174'
									alt='image for cart'
								/>
								<div className='flex flex-col ml-5 h-auto justify-between'>
									<p>
										<b className='mr-2'>ID: </b>1234526
									</p>

									<p>
										<b className='mr-2'>Product: </b>Dazzing
										Sky Shirt
									</p>
									<p className='flex items-center justify-start'>
										<b>Color: </b>
										<div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]'></div>
									</p>
									<p>
										<b className='mr-2'>Size: </b>lg
									</p>
								</div>
							</div>
							<div className=' flex flex-auto flex-col justify-center items-center'>
								<Counter />
								<p className='flex items-center justify-center text-4xl mt-3'>
									<b>$70</b>
								</p>
							</div>
						</div>
						<hr className='mt-7 mb-7' />
					</div>
					<div className=' flex-[0.4] border-2 border-[#8a4af3] p-6 rounded-md shadow-md w-auto h-[40vh] flex flex-col items-center'>
						<h1 className='text-2xl italic underline'>Summary</h1>
						<div className='flex justify-between mt-3 w-[100%]'>
							<p>Subtotal</p>
							<p>$140</p>
						</div>
						<div className='flex justify-between mt-3 w-[100%]'>
							<p>Shipping</p>
							<p>$40</p>
						</div>
						<div className='flex justify-between mt-3 w-[100%]'>
							<p>Shipping Discount</p>
							<p>-$40</p>
						</div>
						<div className='flex justify-between mt-3 w-[100%] text-3xl font-bold'>
							<p>Total</p>
							<p>$140</p>
						</div>
					</div>
				</div>
			</div>
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default Cart;
