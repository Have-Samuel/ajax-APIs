/* eslint-disable no-undef */
// async function getUsers(token) {
//   const res = await axios.get('https://hack-or-snooze.herokuapp.com/users', { params: { token } });
//   console.log(res);
// }

// async function signUp(userName, password, name) {
//   const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { userName, password, name } });
//   console.log(res);
// }

// async function login(userName, password) {
//   const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', { user: { userName, password } });
//   console.log(res);
//   // Return the token
//   return res.data.token;
// }

// signUp('test-1', 'test-2', 'test-3');

// // async function getUserWithAuth() {
// //   const token = await login('test-1', 'test-2');
// //   getUsers(token);
// // }

// // Another EndPoint
// async function createStory() {
//   const token = await login('test-1', 'test-2');
//   const newStory = {
//     token,
//     story: {
//       author: 'Popos',
//       title: 'LookingIn',
//       url: 'http://chickensForLife.com',
//     },
//   };
//   const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', newStory);
//   console.log(res);
// }

// // getUserWithAuth();
// createStory();

// function makeShow(launch) {
//   const show = document.createElement('div');
//   const mission = document.createElement('B');
//   mission.innerText = launch.mission_name;
//   show.append(mission);
//   show.innerHTML += ` - ${launch.rocket.rocket_name}`;
//   show.style = 'color: white';
//   return show;
// }

// function renderLaunches(launches) {
//   const output = document.querySelector('#result');
//   for (const launch of launches) {
//     output.append(makeShow(launch));
//   }
// }

// async function getGif() {
//   const res = await axios.get('http://api.spacexdata.com/v3/launches/upcoming');
//   renderLaunches(res.data);
// }

// const btn = document.querySelector('#search-Btn');
// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   getGif();
// });
// // getGif();

async function getRand() {
  const res = await axios.get('https://dog.ceo/api/breeds/image/random');
  const img = document.querySelector('#dog');
  img.src = res.data.message;
}

async function getDogByBreed(breed) {
  const url = `https://dog.ceo/api/breed/${breed}/images/random`;
  const res = await axios.get(url);
  const img = document.querySelector('#dog');
  img.src = res.data.message;
}

getDogByBreed('labrador');