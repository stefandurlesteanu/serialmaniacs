import React, { useContext } from 'react';
import { SerialContext } from '../SerialContext';

export default function MyPokemons() {
	const serial = useContext(SerialContext);

	return (
		<div>
			{serial}
		</div>
	)
}
