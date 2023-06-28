/* eslint-disable no-undef */
async function getRandomDog() {
  const resp = await axios.get('https://dog.ceo/api/breeds/image/random');
  console.log(resp.data);
  const img = document.querySelector('#dog');
  img.src = resp.data.message;
}

async function getDogByBreed(breed) {
  try {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const resp = await axios.get(url);
    const img = document.querySelector('#dog');
    img.src = resp.data.message;
  } catch (err) {
    alert('Breed not found!');
  }
}
getRandomDog();
getDogByBreed('bulldog');