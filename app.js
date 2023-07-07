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

// function makeShow(breed) {
//   const show = document.createElement('div');
//   const mission = document.createElement('B');
//   mission.innerText = breed;
//   show.append(mission);
//   show.innerHTML += ` - ${launch.rocket.rocket_name}`;
//   show.style = 'color: white';
//   return show;
// }

// function renderLaunches(breeds) {
//   const output = document.querySelector('#result');
//   for (let breed of breeds) {
//     output.append(makeShow(breed));
//   }
// }

// async function getGif() {
//   const res = await axios.get('https://dog.ceo/api/breeds/image/random');
//   renderLaunches(res.data);
// }
// // const form = document.querySelector('#search-form');
// // const input = document.querySelector('#gifs');
// // form.addEventListener('submit', (e) => {
// //   e.preventDefault();
// //   getGif(input.value);
// // });
// const btn = document.querySelector('#search-Btn');
// btn.addEventListener('click', (e) => {

//   getGif();
// });
// // getGif();

async function getRandomDog() {
  const res = await axios.get('https://dog.ceo/api/breeds/image/random');
  const show = document.querySelector('#result');
  const img = document.createElement('img');
  img.id = 'dog';
  img.src = res.data.message;
  show.append(img);
}

// Remove Button
const removeBtn = document.querySelector('#remove');
removeBtn.addEventListener('click', () => {
  const img = document.querySelector('#dog');
  img.remove();
  // getRandomDog = null;
});

async function getDogByBreed(breed) {
  try {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const res = await axios.get(url);
    const img = document.querySelector('#dog');
    img.src = res.data.message;
  } catch (e) {
    console.log(e);
    // alert('BREED NOT FOUND!!');
    getRandomDog();
  }
}

const form = document.querySelector('#search-form');
const input = document.querySelector('#gifs');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getDogByBreed(input.value);
  input.value = '';
});
getDogByBreed();
// 'labrador'