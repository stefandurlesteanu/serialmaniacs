import React from 'react';

export default function CastComponent(props) {
  const actor = props.actor;
  return (
    <div>
      <img src={actor.person.image.medium} />
      <p>{actor.person.name}</p>
      <p>{actor.person.birthday}</p>
      <p>{actor.person.gender}</p>
      <p>{'(' + actor.character.name + ')'}</p>
      {actor.person.country ? (
        <p> {actor.person.country.name}</p>
      ) : (
        <p>No country available yet</p>
      )}
      {/* <p>{actor.person.country.name}</p> */}
    </div>
  );
}
