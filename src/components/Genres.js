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

		const getMovies = (genre) => {
			let newList = []
			for (let i = 0; i < serial.length; i++) {
				if (serial[i].genres.includes(genre)) {
					newList.push({ "name": serial[i].name, "image": serial[i].image.medium, "id": serial[i].id })
				}
			}
			return newList
		}

		const loadingGenres = async (data) => {

			let _genre = await Promise.all(data.map(async serial => {
				return serial.genres
			}))
			let _genre2 = _genre.flat()
			let _genre3 = _genre2.filter((v, i, a) => a.indexOf(v) === i)
			let _genre4 = _genre3.reduce(function (o, val) { o[val] = [val]; return o; }, {});
			const tempList = _genre4
			const secondTempList = _genre4
			Object.keys(tempList).forEach(el => secondTempList[el] = getMovies(el))
			setGenres(secondTempList)
		}

		loadingGenres(serial);


	}, [serial])









	return (

		<div>
			{
				genres.length === 0 ? <h1>Loading...</h1> : (
					<>
						{
							Object.keys(genres).map((gen, i) => (
								< GenreCard key={i} gen={gen} />

							))
						}
					</>
				)
			}
		</div>
	)
}


// 