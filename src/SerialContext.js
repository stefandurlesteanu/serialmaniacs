import React, { createContext, useState, useEffect } from 'react';
import { getData } from './components/services/getData'

export const SerialContext = createContext();

export const SerialProvider = props => {
	const initialUrl = 'http://api.tvmaze.com/shows'
	const [serial, setSerial] = useState([]);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchData() {
			let response = await getData(initialUrl);
			function waitForElement() {
				if (typeof response !== "undefined") {
					setSerial(response);
					setLoading(false)
				}
				else {
					setTimeout(waitForElement, 250);
				}
			}
			waitForElement();
		}
		fetchData();

	}, [])

	return (
		<SerialContext.Provider value={{ loadedSerial: [serial, setSerial], loadingData: [loading, setLoading] }} >
			{props.children}
		</ SerialContext.Provider>
	)
}
