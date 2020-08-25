import React from 'react';
import './App.css';
import { SerialProvider } from './SerialContext';
import ListedShows from './components/ListedShows'
import { default as Nav } from './components/layout/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	return (
		<SerialProvider>
			<div className="App">
				<Nav />
				<ListedShows />
			</div>
		</SerialProvider>
	)
}

export default App;


