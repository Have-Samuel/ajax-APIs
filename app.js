/* eslint-disable no-undef */
// api_key: 'WvwRyWWyOYCzSGKfBfTnvvQh52qw0oop'

// 

const form = document.querySelector('#search-form');
// const inputSearch = document.querySelector('#gifs');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  

  const response = axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      q: input.value,
      api_key: 'WvwRyWWyOYCzSGKfBfTnvvQh52qw0oop',
    },
  });
  addGif(response.data);
});

//   const res = await axios.get('https://dog.ceo/api/breeds/image/random');
//   const show = document.querySelector('#result');
//   const img = document.createElement('img');
//   img.id = 'dog';
//   img.src = res.data.message;
//   show.append(img);
// }

// // Remove Button
// const removeBtn = document.querySelector('#remove');
// removeBtn.addEventListener('click', () => {
//   const img = document.querySelector('#dog');
//   img.remove();
// });

// async function getDogByBreed(breed) {
//   try {
//     const url = `https://dog.ceo/api/breed/${breed}/images/random`;
//     const res = await axios.get(url);
//     const img = document.querySelector('#dog');
//     img.src = res.data.message;
//   } catch (e) {
//     console.log(e);
//     // alert('BREED NOT FOUND!!');
//     getRandomDog();
//   }
// }