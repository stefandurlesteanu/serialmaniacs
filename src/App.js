import React from 'react';
import './App.css';
import { SerialProvider } from './SerialContext';
import ListedShows from './components/ListedShows'
import { default as Nav } from './components/layout/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layout/footer';

function App() {

	return (
		<SerialProvider>
			<div className="App">
				<div className="contentWrap">
					<Nav />
					<ListedShows />
					<Footer />
				</div>
			</div>
		</SerialProvider>
	)
}

export default App;


