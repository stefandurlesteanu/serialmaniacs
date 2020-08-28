import React from 'react'
import FrontVideo from '../FrontVideo';
import RandomSerials from '../RandomSerials'
import { Container } from 'react-bootstrap'
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	margin: 2rem 0;
	padding: 15px 0;

`

export default function FrontPage() {
	return (
		<Wrapper>
			<Container>
				<FrontVideo />
				<RandomSerials />
			</Container>
		</Wrapper>
	)
}
