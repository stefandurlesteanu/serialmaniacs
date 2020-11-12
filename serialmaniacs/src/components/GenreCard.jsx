import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Col, Card, Row } from 'react-bootstrap';
import '../../src/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const GenreCard = (props) => {
	let shows = props.shows
	let genre = props.genre


	if (shows.length > 4){
		shows = shows.slice(0,4)
	}
	




	

	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4
	};

	

	let content =  
	<Container key={genre}>
	<div className="clearfix mt-5 mb-2">
		<h4 className="float-left">
			{genre}
		</h4>
	</div>
	<Slider {...settings} style={{ marginBottom: "30px" }}>
		{shows.map(g => {
			let image = g.image !== null ? g.image.medium : "https://www.mukwonagolibrary.org/wp-content/uploads/2018/07/no-movie.jpg";
			return (
				<React.Fragment key={genre}>
					<Col>
						<Card border="transparent">
							<Card.Img
								variant="top"
								src={image}
								alt=""
							/>
							<Card.Body style={{ minHeight: '110px', paddingBottom: "0" }}>
								<Row style={{ display: "flex", alignItems: "center" }}>
									<FontAwesomeIcon icon={['fa', 'star']} style={{ color: "gold" }} />
									<Col style={{ paddingLeft: "5px" }}>{g.rating.average}</Col>
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

	return content;
}

export default GenreCard;