import React from "react";

const background = () => {
	return (
		<div>
			<div className='bg-gradient-to-tr from-purple-500 to-green-700 w-full h-96 relative bg-cover bg-center'>
				<img
					src='https://media.istockphoto.com/photos/black-interior-with-wood-wall-panel-and-plants-3d-render-illustration-picture-id1272362475?k=20&m=1272362475&s=612x612&w=0&h=YSj09PRwfLxIECmwjPTErUyQBzsyb1XiAoiKJ_j_tNE='
					alt=''
					className='w-full h-full object-cover absolute mix-blend-overlay'
				/>
				<div className='flex justify-center items-center py-36 font-bold text-7xl text-white underline uppercase'>
					<h1>Mishaal khan</h1>
				</div>
			</div>
		</div>
	);
};

export default background;
