import React, { useContext } from 'react';
import { SerialContext } from '../SerialContext';

export default function ListedShows() {

	const [serial, setSerial] = useContext(SerialContext);

	return (
		<div>
			{serial.map((ser) => (
				<div key={ser.id}>
					<p>{ser.id}</p>
					<p>{ser.name}</p>
					<p>{ser.network.country.name}</p>
				</div>
			))}
		</div>
	)
}
