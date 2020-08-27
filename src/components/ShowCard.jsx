import React, { useState, useEffect } from 'react';
import CastComponent from './CastComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import CardColumn from 'react-bootstrap/CardColumns';
import './Show.css';

export function ShowCard(props) {
  const [loadedData, setLoaded] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [, setCast] = useState({});

  useEffect(() => {
    if (props.serial === 'undefined') {
      setLoading(true);
    } else {
      setLoaded(props.serial);
      setLoading(false);
      setCast(props.serial._embedded.cast);
    }
  }, [props.serial]);

  const content = isLoading ? (
    <div>Loading ...</div>
  ) : (
    <>
      <Container fluid='true' className='show-container'>
        <Row md={2}>
          <Col>
            <div className='show-image-container'>
              <img src={loadedData.image.original} alt=""/>
            </div>
          </Col>
          <Col>
            <div className='show-info-container'>
              <h3 style={{ textAlign: 'center' }}>{loadedData.name}</h3>
              <p>
                Genres :
                {loadedData.genres.map((genre) => {
                  return <span> {genre}</span>;
                })}
              </p>
              <p>Rating : {loadedData.rating.average}</p>
              <p>Language : {loadedData.language}</p>
              <p>Premiered : {loadedData.premiered}</p>
              <p>Runtime : {loadedData.runtime}</p>
              <p>
                <a href={loadedData.officialSite}>{loadedData.officialSite}</a>
              </p>
              {
                <span
                  dangerouslySetInnerHTML={{
                    __html: loadedData.summary,
                  }}
                ></span>
              }
            </div>
          </Col>
        </Row>
      </Container>
      <div className='cards-container'>
        <Container>
          <Row md={5}>
            {loadedData._embedded.cast.map((actor) => {
              console.log('actor in showcard', actor);
              return <CastComponent actor={actor} />;
            })}
          </Row>
        </Container>
      </div>
    </>
  );
  return content;
}
