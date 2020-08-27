import React from 'react'
import FrontVideo from '../FrontVideo';
import RandomSerials from '../RandomSerials'
import { Container } from 'react-bootstrap'

export default function FrontPage() {
	return (
		<Container>
			<FrontVideo />
			<RandomSerials />
		</Container>
	)
}
