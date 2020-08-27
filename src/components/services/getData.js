import axios from "axios";

export async function getData(url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then(function ({ data }) {
      resolve(data);
    });
  });
}

// Math.floor( Math.random() * serialsLenght
export function getRandomShows(shows) {
  const lenghtShows = shows.length;
  let counter = 0;
  let randomList = [];
  while (counter < 10) {
    let randomShowTemporary = shows[Math.floor(Math.random() * lenghtShows)];
    randomList.push(randomShowTemporary);
  }
  console.log(randomList);
  return randomList;
}

// const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// getRandomShows(x);
