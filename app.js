/* eslint-disable no-undef */
async function getRandomDog() {
  const resp = await axios.get('https://dog.ceo/api/breeds/image/random');
  console.log(resp.data);
  const img = document.querySelector('#dog');
  img.src = resp.data.message;
}

getRandomDog();