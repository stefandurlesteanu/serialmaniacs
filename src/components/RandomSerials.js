import React, { useState, useEffect } from "react";
import { getData } from "./services/getData";
import {
	Card,
	Col,
	Row,
	Button
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


const WrapperR = styled.div`
	position: relative;
	float: right;
`
const RandomSerials = (props) => {
	const initialUrl = "https://api.tvmaze.com/shows";
	const [serial, setSerial] = useState([]);
	const [loading, setLoading] = useState(true);
	const [slide, setSlide] = useState(0);

	useEffect(() => {
		async function fetchData() {
			let response = await getData(initialUrl);
			function waitForElement() {
				if (typeof response !== "undefined") {
					function getRandomShows(shows) {
						const lenghtShows = shows.length;
						let counter = 0;
						let randomList = [];
						while (counter < 10) {
							let randomShowTemporary =
								shows[Math.floor(Math.random() * lenghtShows)];
							randomList.push(randomShowTemporary);
							counter++;
						}

						return randomList;
					}
					const randomListSerial = getRandomShows(response);
					setSerial(randomListSerial);
					setLoading(false);
				} else {
					setTimeout(waitForElement, 250);
				}
			}
			waitForElement();
		}
		fetchData();
	}, []);

	const nextSlide = e => {
		e.preventDefault();
		const lOS = serial.length - 1;
		if (slide > lOS - 1) {
			setSlide(slide - lOS)
		} else {
			setSlide(slide + 1)
		}
	}

	let content = (
		<WrapperR>
			<Card
				style={{
					width: "20rem",
					position: "right",
					top: "2px",
					maxHeight: "85vh"

				}}
			>
				{loading ? (
					<h1>'Loading ...'</h1>
				) : (
						<>
							<Card.Header style={{ textAlign: "center" }}><h5>Pogar recommends</h5></Card.Header>
							<Card.Img variant="bottom" src={serial[slide].image.medium} />
							<Card.Body style={{ padding: ".1rem 1.25rem" }}>
								<Card.Title> Title: {serial[slide].name}</Card.Title>
								<div style={{ display: 'block' }}>
									<Card.Text style={{ float: "left", marginBottom: ".3rem" }}>Genres: {serial[slide].genres[0]}</Card.Text>
									<Row style={{ float: "right" }}>
										<FontAwesomeIcon
											icon={["fa", "star"]}
											style={{ color: "gold" }}
										/>
										<Col style={{ paddingLeft: "5px" }}>
											{serial[slide].rating.average}
										</Col>
									</Row>
								</div>
							</Card.Body>

							<Button variant="outline-dark light" onClick={nextSlide}>
								<FontAwesomeIcon size={"2x"} icon={['fa', 'forward']} className="batmanButton" />
							</Button>

						</>
					)}
			</Card>
		</WrapperR>
	);

	return content;
};

export default RandomSerials;
