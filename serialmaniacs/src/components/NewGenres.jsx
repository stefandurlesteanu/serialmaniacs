import React, {useEffect} from 'react';
import { useQuery, gql } from '@apollo/client';
import GenreCard from './GenreCard';
import '../App.css';
import { Container, Col, Button, Row } from 'react-bootstrap';





export default function NewGenres({ match }) {

	

	let page_number = match.params.id;
	let next_page = (parseInt(page_number)+1) + "";
	let prev_page = (parseInt(page_number)-1) + "";
	let prevButtonStatus = false;
	let nextButtonStatus = false;

	const SHOWS_QUERY = gql`
	query Shows ($page_number: String!, $next_page: String!){
		current_page: shows (page_number : $page_number) {
			id,
			name,
			genres,
			rating{
				average
			},
			image {
				medium
			}
		}
		next_page: shows (page_number : $next_page)  {
			id    
		}
	}
`



	const { loading, data } = useQuery(SHOWS_QUERY, {
		variables: { page_number, next_page},
		errorPolicy: 'ignore',
	});
	

	if (loading) return <p>Loading...</p>;
	if (data.current_page === null) return <p>No more show here, please go to previous pages</p>;
	if (data.next_page === null) nextButtonStatus = true;
	if (page_number === "0") prevButtonStatus = true;


	let genres_map = new Map();
	data.current_page.forEach(show => {
		show.genres.forEach(genre => {
			if(genres_map.has(genre)){
				genres_map.get(genre).push(show)
			} else {
				genres_map.set(genre, [show])
			}
		})
		
	});

  
	return (
		<>
		{
		Array.from(genres_map).map(([key, value]) => 
		<GenreCard key={key+page_number} shows={value} genre={key} cache></GenreCard>
		)
		}	
		<Container className="mt-5">
			<Row className="justify-content-md-center">
				<Col xs lg="2">
					<Button id="prevButton" href={`/genres/${prev_page}`} variant="outline-success" disabled={prevButtonStatus} block>Previous Page</Button>
				</Col>
				<Col xs lg="2">
					<Button href={`/genres/${next_page}`} variant="outline-success" disabled={nextButtonStatus} block>Next Page</Button>
				</Col>
			</Row>
		</ Container>
	</>
	)
	
}
