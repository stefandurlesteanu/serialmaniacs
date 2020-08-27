import React, { useState, useEffect } from 'react';

export function ShowCard(props) {
  console.log('in show card');

  const [isLoading, setLoading] = useState(true);
  const [loadedData, setLoaded] = useState({});

  useEffect(() => {
    console.log('in use efect');

    setData();
  }, [loadedData]);

  async function setData() {
    if (props.serial === 'undefined') {
      setLoading(true);
      console.log('s-a setat loading in ' + isLoading);
    } else {
      console.log('s-a setat loadeddata in ' + props.serial);
      setLoading(false);
      setLoaded(props.serial);
    }
  }

  console.log('inainte de  return');
  return (
    console.log('in return'),
    console.log(loadedData),
    isLoading ? (
      <div> Loading ...</div>
    ) : (
      <div>
        {/* <div className='show-image-container'>
            <img src={loadedData.image.original} />
          </div> */}
        <div className='show-info-container'>
          <p>{loadedData.name}</p>
          {/* <p>{loadedData.rating.average}</p>
            <p>{loadedData.language}</p>
            <p>{loadedData.summary}</p> */}
        </div>
      </div>
    )
  );
}
