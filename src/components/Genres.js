import React, { useContext, useEffect, useState } from 'react';
import { SerialContext } from '../SerialContext';


export default function Genres() {

	const { loadedSerial, loadingData } = useContext(SerialContext);
	const [serial,] = loadedSerial;
	const [, setLoading] = loadingData;
	const [load, setLoad] = useState(false)
	const [genres, setGenres] = useState([])

	useEffect(() => {
		function waitForElement() {
			if (typeof serial !== "undefined" && serial != null && serial.length != null
				&& serial.length > 0) {
				setLoad(false)
			}
			else {
				setTimeout(waitForElement, 250);
			}
		}

		waitForElement();

		loadingGenres(serial);


	}, [serial])



	const loadingGenres = async (data) => {
		let _genre = await Promise.all(data.map(async serial => {
			return serial.genres
		}))
		let _genre2 = _genre.flat()
		let _genre3 = new Set(_genre2)
		setGenres(_genre3)
		return _genre2
	}

	return (

		<div >{
			genres[1]
		}


		</div >
	)
}


// const loadingGenres = async (data) => {
// 	let _genre = await Promise.all(data.map(async serial => {
// 		serial.genres.map(gen => {

// 			return gen
// 		})
// 	}))
// 	setGenres(_genre)
// }

/* {genres.map((gen) => (
				<p>{gen}</p>
			))} */

			// {load === false ? <h1>Loading ...</h1> : (
			// 	<>
			// 		{
			// 			genres.map((gen) => (
			// 				<p>{gen}</p>
			// 			))
			// 		}
			// 	</>
			// )}