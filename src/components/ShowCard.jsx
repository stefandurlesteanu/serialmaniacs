import React, { useState, useEffect } from 'react';
import CastComponent from './CastComponent';

export function ShowCard(props) {
  const [loadedData, setLoaded] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [cast, setCast] = useState({});

  useEffect(() => {
    if (props.serial === 'undefined') {
      setLoading(true);
    } else {
      setLoaded(props.serial);
      setLoading(false);
      setCast(props.serial._embedded.cast);
    }
  }, []);

  const content = isLoading ? (
    <div> Loading ...</div>
  ) : (
    <div classname='show-container'>
      <div className='show-image-container'>
        <img src={loadedData.image.medium} />
      </div>
      <div className='show-info-container'>
        <p>{loadedData.name}</p>
        <p>{loadedData.rating.average}</p>
        <p>{loadedData.language}</p>
        {
          <span
            dangerouslySetInnerHTML={{
              __html: loadedData.summary,
            }}
          ></span>
        }
      </div>
      <div>
        <div className='cast-info-container'>
          {loadedData._embedded.cast.map((actor) => {
            console.log('actor in showcard', actor);
            return <CastComponent actor={actor} />;
          })}
        </div>
      </div>
    </div>
  );
  return content;
}
