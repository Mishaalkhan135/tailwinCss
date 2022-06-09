import React, { useState } from "react";
import { Close } from "@mui/icons-material";

const Annonce = () => {
	const [annonce, setAnnonce] = useState(
		"flex justify-center items-center bg-[#8a4af3] font-bold text-white"
	);
	const handleClose = () => {
		setAnnonce(annonce + " hidden");
	};
	return (
		<div className={annonce}>
			<h1>Hurry up it's 40% off now</h1>
			<Close className='cursor-pointer' onClick={handleClose} />
		</div>
	);
};

export default Annonce;
