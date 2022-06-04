import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/hero";
import Analytics from "./component/analytics";
import NewsLetter from "./component/newsLetter";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Analytics />
			<NewsLetter />
		</div>
	);
}

export default App;
