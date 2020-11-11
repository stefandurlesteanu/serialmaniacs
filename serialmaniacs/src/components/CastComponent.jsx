import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import './Show.css';
import styled from "styled-components";

const P = styled.p`
	color: black
`

export default function CastComponent(props) {
  const actor = props.actor;
  return (
    <Col>
      <div class='actor-card-container'>
        <div className='card-image'>
          <img src={actor.person.image.medium} alt='actor' />
        </div>
        {/* <img src={actor.person.image.medium} /> */}
        {/* <div className='actor-card-body'> */}
        <P>{actor.person.name}</P>
        <P>{'(' + actor.character.name + ')'}</P>
        {actor.person.country ? (
          <P> {actor.person.country.name}</P>
        ) : (
          <P>No country available yet</P>
        )}
        {/* </div> */}
      </div>
      {/* <p>{actor.person.country.name}</p> */}
    </Col>
  );
}
