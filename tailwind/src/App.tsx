import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/hero";
import Analytics from "./component/analytics";
import NewsLetter from "./component/newsLetter";
import Cards from "./component/cards";
import Footer from "./component/footer";
function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Analytics />
			<NewsLetter />
			<Cards />
			<Footer />
		</div>
	);
}

export default App;
