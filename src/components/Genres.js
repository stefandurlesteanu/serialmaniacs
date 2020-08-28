import React, { useContext, useEffect, useState } from 'react';
import { SerialContext } from '../SerialContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Col, Card, Row } from 'react-bootstrap';
import '../../src/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"




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
					newList.push({ "name": serial[i].name, "image": serial[i].image.medium, "id": serial[i].id, "rating": serial[i].rating.average })
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



	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4
	};





	return (

		<div>
			{
				genres.length === 0 ? <h1>Loading...</h1> : (
					<>
						{
							Object.keys(genres).map((gen, i) => (
								<Container key={i}>
									<div className="clearfix mt-5 mb-2">
										<h4 className="float-left">
											{gen}
										</h4>
									</div>
									<Slider {...settings} style={{ marginBottom: "30px" }}>
										{genres[gen].map(g => {
											return (
												<React.Fragment>
													<Col>
														<Card border="transparent">
															<Card.Img
																variant="top"
																src={g.image}
																alt=""
															/>
															<Card.Body style={{ minHeight: '110px', paddingBottom: "0" }}>
																<Row style={{ display: "flex", alignItems: "center" }}>
																	<FontAwesomeIcon icon={['fa', 'star']} style={{ color: "gold" }} />
																	<Col style={{ paddingLeft: "5px" }}>{g.rating}</Col>
																</Row>
																<Row>
																	<Col style={{ textAlign: "left", paddingTop: "10px" }}><a className="forA" href={`/show/${g.id}`}>{g.name}</a></Col>
																</Row>
															</Card.Body>
														</Card>
													</Col>
												</React.Fragment>
											)
										})}
									</Slider>
								</Container>
							))
						}
					</>
				)
			}
		</div >
	)
}


