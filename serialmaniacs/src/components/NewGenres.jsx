import React from 'react'
import { useQuery, gql } from '@apollo/client';



export default function NewGenres({ match }) {

	let page_number = match.params.id;

	const SHOWS_QUERY = gql`
	query Shows ($page_number: String!){
	shows (page_number : $page_number) {
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
	}
`

	const { loading, error, data } = useQuery(SHOWS_QUERY, {
		variables: { page_number },
	});
	let genres_map = new Map();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	data.shows.forEach(show => {
		show.genres.forEach(genre => {
			if(genres_map.has(genre)){
				genres_map.get(genre).push(show)
			} else {
				genres_map.set(genre, [show])
			}
		})
	});
	console.log(genres_map);
  
	return <h1>Test</h1>
	
  }