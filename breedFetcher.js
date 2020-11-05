const request = require('request');



const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback("Could not load the page.");
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback("Error: Breed was not found.");
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };