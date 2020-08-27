import React, { useState, useEffect } from "react";
import { getData } from "./services/getData";
import {
	Carousel,
	Card,
	ListGroupItem,
	ListGroup,
	Col,
	Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RandomSerials = (props) => {
	const initialUrl = "https://api.tvmaze.com/shows";
	const [serial, setSerial] = useState([]);
	const [loading, setLoading] = useState(true);

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

	let content = (
		<Card
			style={{
				width: "20rem",
				position: "right",
				top: "2px",
			}}
		>
			{loading ? (
				<h1>'Loading ...'</h1>
			) : (
					<>
						<Card.Img variant="top" src={serial[1].image.medium} />
						<Card.Body>
							<Card.Title> Title: {serial[1].name}</Card.Title>
							<Card.Text>Status: {serial[1].status}</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroupItem>Genres: {serial[1].genres[0]}</ListGroupItem>
							<ListGroupItem>
								{" "}
								<Row>
									<FontAwesomeIcon
										icon={["fa", "star"]}
										style={{ color: "gold" }}
									/>
									<Col style={{ paddingLeft: "5px" }}>
										{serial[1].rating.average}
									</Col>{" "}
								</Row>
							</ListGroupItem>
						</ListGroup>
						<Card.Body>
							<Card.Link href={"/show/" + serial[1].id}>Details</Card.Link>
						</Card.Body>{" "}
					</>
				)}
		</Card>
	);

	return content;
};

export default RandomSerials;
