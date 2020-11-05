const request = require('request');

const args = process.argv.slice(2);

const breed = args;
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  const getData = body => typeof body === "string" ? JSON.parse(body) : body;
  const data = getData(body);

  // console.log(response)
  if (error !== null) {
    console.log("Could not load the page.");
  } else if (data.length === 0) {
    console.log("Error: Breed was not found.");
  } else {
    console.log(data[0].description);
  }
});

