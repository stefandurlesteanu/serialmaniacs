import axios from "axios";

export async function getData(url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then(function ({ data }) {
      resolve(data);
    });
  });
}
