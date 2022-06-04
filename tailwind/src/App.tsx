import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/hero";
import Analytics from "./component/analytics";
import NewsLetter from "./component/newsLetter";
import Cards from "./component/cards";
function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Analytics />
			<NewsLetter />
			<Cards />
		</div>
	);
}

export default App;
