/* eslint-disable no-undef */
// api_key: 'WvwRyWWyOYCzSGKfBfTnvvQh52qw0oop'
const gifArea = document.querySelector('#result');
const input = document.querySelector('#search');
const form = document.querySelector('#search-form');

// Use ajax result to add a gif
function addGif(res) {
  const numResults = res.data.length;
  if (numResults) {
    const randomIdx = Math.floor(Math.random() * numResults);
    const newCol = document.createElement('div');
    newCol.classList.add('col-md-4', 'col-12', 'mb-4');
    const newGif = document.createElement('img');
    newGif.src = res.data[randomIdx].images.original.url;
    newGif.classList.add('w-100');
    newCol.append(newGif);
    gifArea.append(newCol);
  }
}

// Handle form submission: clear search box & make ajax call
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const searchTerm = input.value;
  input.value = '';

  const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      q: searchTerm,
      api_key: 'WvwRyWWyOYCzSGKfBfTnvvQh52qw0oop',
    },
  });
  addGif(response.data);
});

// Remove gif
const remove = document.querySelector('#remove');
remove.addEventListener('click', () => {
  gifArea.innerHTML = '';
});