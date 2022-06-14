import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Pagination from "./components/Pagination";
import Image from "./components/Image";
// import Drawer from "./components/Drawer";
function App() {
	return (
		<div>
			{/* <Drawer /> */}
			<Navbar />
			<Home />
			<Cards />
			<Pagination />
			<Image />
		</div>
	);
}

export default App;
