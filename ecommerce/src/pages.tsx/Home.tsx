import React from "react";
import Annonce from "../component/Annonce";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
const Home = () => {
	return (
		<div>
			<Annonce />
			<Navbar />
			<Slider />
		</div>
	);
};

export default Home;
