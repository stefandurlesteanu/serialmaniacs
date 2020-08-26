import React, { useContext, useEffect, useState } from 'react';
import { SerialContext } from '../SerialContext';


export default function Genres() {

	const { loadedSerial, } = useContext(SerialContext);
	const [serial,] = loadedSerial;
	const [, setLoad] = useState(false)
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
		let _genre3 = _genre2.filter((v, i, a) => a.indexOf(v) === i)
		setGenres(_genre3)
	}



	return (

		<div>
			{
				genres.length === 0 ? <h1>Loading...</h1> : (
					<>
						{
							genres.map((gen, i) => (
								<div key={i}>
									<p>{gen}</p>
								</div>
							))
						}
					</>
				)
			}
		</div>
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