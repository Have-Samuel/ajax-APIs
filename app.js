/* eslint-disable no-undef */
async function getRandomDog() {
  const resp = await axios.get('https://dog.ceo/api/breeds/image/random');
  console.log(resp.data);
}

getRandomDog();