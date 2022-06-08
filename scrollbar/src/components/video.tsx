import React from "react";
import ReactPlayer from "react-player";

const video = () => {
	return (
		<div className='flex justify-center items-center bg-black p-10'>
			<ReactPlayer
				width='400px'
				height='280px'
				controls
				url='https://www.youtube.com/watch?v=fC9CwJzmb_M'
			/>
		</div>
	);
};

export default video;
