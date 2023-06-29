/* eslint-disable no-undef */
async function postUsers() {
  const res = await axios.get('https://reqres.in/api/users');
  console.log(res);
}

async function createUser() {
  const res = await axios.post('https://reqres.in/api/users', { name: 'JustineNakiganda', email: 'something@gmail.com', Age: 34 });
  console.log(res);
}
createUser();

// postUsers();