import React from 'react';
import './App.css';
import { SerialProvider } from './SerialContext';
import ListedShows from './components/ListedShows'

function App() {

	return (
		<SerialProvider>
			<div className="App">
				<ListedShows />
			</div>
		</SerialProvider>
	)
}

export default App;


