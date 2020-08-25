import React, { createContext, useState } from 'react';
import { shows } from './components/services/Shows'

export const SerialContext = createContext();

export const SerialProvider = props => {

	const [serial, setSerial] = useState('Hello')
	const [loading, setLoading] = useState(true)

	return (
		<SerialContext.Provider value={[serial, setSerial]}>
			{props.children}
		</ SerialContext.Provider>
	)
}
