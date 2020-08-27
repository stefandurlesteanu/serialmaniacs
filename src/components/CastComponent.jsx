import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import './Show.css';

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
        <p>{actor.person.name}</p>
        <p>{'(' + actor.character.name + ')'}</p>
        {actor.person.country ? (
          <p> {actor.person.country.name}</p>
        ) : (
          <p>No country available yet</p>
        )}
        {/* </div> */}
      </div>
      {/* <p>{actor.person.country.name}</p> */}
    </Col>
  );
}
