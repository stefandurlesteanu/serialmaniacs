import React, { useEffect, useState } from 'react';
import { getData } from './services/getData';

export function ShowPage({ match }) {
  const url =
    'https://cors-anywhere.herokuapp.com/' +
    'https://api.tvmaze.com/shows/' +
    match.params.id +
    '?embed=cast';
  const [serial, setSerial] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let response = await getData(url);
      function waitForElement() {
        if (typeof response !== 'undefined') {
          setSerial(response);
          setLoading(false);
        } else {
          setTimeout(waitForElement, 250);
        }
      }
      waitForElement();
    }
    fetchData();
  }, [url]);

  // return <ShowCard serial={serial.serial} />;
  return (
    <div>
      {serial.name}
      {loading ? <div>Loading </div> : serial._embedded.cast[0].person.name}
      {/* {serial.image.medium} */}
    </div>
  );
}
