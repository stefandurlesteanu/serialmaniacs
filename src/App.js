import React, { useContext } from 'react';
import './App.css';
import { SerialProvider, SerialContext } from './SerialContext';
import ListedShows from './components/ListedShows'

function App() {

	const serial = useContext(SerialContext);

	console.log(serial)

	return (
		<SerialProvider>
			<div className="App">
				<ListedShows />

				{/* {serial.map((ser) => (
					<>
						<p>{ser.id}</p>
						<p>{ser.name}</p>
						<p>{ser.network.country.name}</p>
					</>
				))} */}
			</div>
		</SerialProvider>
	)
}

export default App;


