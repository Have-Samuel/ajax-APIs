/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
// second Request
async function getData() {
  const response = await axios.get('https://swapi.dev/api/planets/');
  // Destructuring
  const { next, results } = (response.data);
  for (const planet of results) {
    console.log(planet.name);
  }
  // Second request
  const response2 = await axios.get(next);
  const results2 = response2.data.results;
  for (const planet of results2) {
    console.log(planet.name);
  }
}

// This shows up faster than the async/await funnction
getData();
console.log('I HAPPEN AFTER getData()');

// Using SpaceX Launch Data