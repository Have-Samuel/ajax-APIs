async function getData() {
  const response = await axios.get('https://swapi.dev/api/planets/');
  for (const planet of response.data.results) {
    console.log(planet);
  }
}

// This shows up faster than the async/await funnction
getData();
console.log('I HAPPEN AFTER getData()');