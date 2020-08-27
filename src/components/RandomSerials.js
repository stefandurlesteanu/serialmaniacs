import React, { useState, useEffect } from "react";
import { getData } from "./services/getData";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
const RandomSerials = (props) => {
	const initialUrl = "http://api.tvmaze.com/shows";
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
		// <Carousel>
		//   {loading ? (
		//     <h1>'Loading ...'</h1>
		//   ) : (
		//     <>
		//       {" "}
		//       {serial.map((ser) => (
		//         <Carousel.Item>
		//           <img className="d-block w-100" src={ser.image.medium} alt="" />
		//           <Carousel.Caption>
		//             <h3>{ser.name}</h3>
		//             <p>{ser.id}</p>
		//           </Carousel.Caption>
		//         </Carousel.Item>
		//       ))}
		//     </>
		//   )}
		// </Carousel>

		<Card
			style={{
				width: "20rem",
				position: "relative",
				top: "2px",
			}}
		>
			{loading ? (
				<h1>'Loading ...'</h1>
			) : (
					<>
						<Card.Img variant="top" src={serial[1].image.medium} />
						<Card.Body>
							<Card.Title>{serial[1].name}</Card.Title>
							<Card.Text>Status: {serial[1].status}</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroupItem>Genres: {serial[1].genres[0]}</ListGroupItem>
							<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
							<ListGroupItem>Vestibulum at eros</ListGroupItem>
						</ListGroup>
						<Card.Body>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>{" "}
					</>
				)}
		</Card>

		// <div>
		//   {loading ? (
		//     <h1>'Loading ...'</h1>
		//   ) : (
		//     <>
		//       {serial.map((ser) => (
		//         <p>{ser.id}</p>
		//       ))}
		//     </>
		//   )}
		// </div>
	);

	return content;
};

export default RandomSerials;
