import React from "react";

const background = () => {
	return (
		<div>
			<div className='bg-gradient-to-tr from-purple-900 to-green-700 w-full h-full relative bg-cover bg-center'>
				<img
					src='https://media.istockphoto.com/photos/black-interior-with-wood-wall-panel-and-plants-3d-render-illustration-picture-id1272362475?k=20&m=1272362475&s=612x612&w=0&h=YSj09PRwfLxIECmwjPTErUyQBzsyb1XiAoiKJ_j_tNE='
					alt=''
					className='w-full h-full object-cover absolute mix-blend-overlay'
				/>
				<div className='flex justify-center items-center m-5 italic font-serif flex-col py-36 font-bold text-6xl text-white uppercase'>
					<h1 className='underline decoration-sky-500 decoration-3'>
						Mishaal khan
					</h1>
					<p className='text-slate-100 text-4xl mt-5 underline decoration-double'>
						This Forest Belongs to Mishaal khan
					</p>
				</div>
			</div>
		</div>
	);
};

export default background;
