/* eslint-disable no-undef */
async function getJokes() {
  const res = await axios.get('https://api.chucknorris.io/jokes/random');
  console.log(res.data.value);
}

getJokes();