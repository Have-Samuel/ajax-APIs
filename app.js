/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
// // second Request
// async function getData() {
//   const response = await axios.get('https://swapi.dev/api/planets/');
//   // Destructuring
//   const { next, results } = (response.data);
//   for (const planet of results) {
//     console.log(planet.name);
//   }
//   // Second request
//   const response2 = await axios.get(next);
//   const results2 = response2.data.results;
//   for (const planet of results2) {
//     console.log(planet.name);
//   }
// }

// // This shows up faster than the async/await funnction
// getData();
// console.log('I HAPPEN AFTER getData()');

// Manipulate the DOM

function makeLaunchLi(launch) {
  const newLi = document.createElement('LI');
  const mission = document.createElement('B');
  mission.innerText = launch.mission_name;
  newLi.append(mission);
  newLi.innerHTML += ` - ${launch.rocket.rocket_name}`;
  newLi.innerHTML += ` => ${launch.details}`;
  return newLi;
}

function renderLaunches(launches) {
  const ul = document.querySelector('#launches');
  for (const launch of launches) {
    ul.append(makeLaunchLi(launch));
  }
}

// Using SpaceX Launch Data
async function getLaunches() {
  const resp = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
  renderLaunches(resp.data);
}

// getLaunches();

const btn = document.querySelector('#getLaunches');
btn.addEventListener('click', getLaunches);