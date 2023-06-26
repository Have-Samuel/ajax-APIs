function getData() {
  const response = axios.get('https://swapi.co/api/planets/');
  for (let planet of response.data.results) {
      console.log(planet.name)
  }
}

// This shows up faster than the async/await funnction
getData();
console.log('I HAPPEN AFTER getData()')