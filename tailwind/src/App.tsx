import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/hero";
import Analytics from "./component/analytics";
import NewsLetter from "./component/newsLetter";
import Cards from "./component/cards";
import Scrollbar from "./component/scrollbar";
import Footer from "./component/footer";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Analytics />
			<NewsLetter />
			<Cards />
			<Scrollbar />
			<Footer />
		</div>
	);
}

export default App;
