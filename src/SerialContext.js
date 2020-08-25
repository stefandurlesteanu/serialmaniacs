import React, { createContext, useState } from 'react';
import { shows } from './components/services/Shows'

export const SerialContext = createContext();

export const SerialProvider = props => {

	const [serial, setSerial] = useState(shows)
	const [loading, setLoading] = useState(true)

	return (
		<SerialContext.Provider value={'Hello'}>
			{props.children}
		</ SerialContext.Provider>
	)
}
