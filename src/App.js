import React from 'react';
import './App.css';
import { SerialProvider } from './SerialContext';
// import ListedShows from './components/ListedShows'
import { default as Nav } from './components/layout/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layout/footer';
import FrontVideo from './components/FrontVideo';
import Genres from './components/Genres';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

	return (
		<SerialProvider>
			<div className="App">
				<div className="contentWrap">
					<Nav />
					<FrontVideo />
					<Genres />
					<Footer />
				</div>
			</div>
		</SerialProvider>
	)
}

export default App;


