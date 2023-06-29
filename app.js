/* eslint-disable no-undef */
// async function getUsers() {
//   const res = await axios.get('https://hack-or-snooze.herokuapp.com/users');
//   console.log(res);
// }

async function signUp(userName, password, name) {
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { userName, password, name } });
  console.log(res);
}

async function login(userName, password) {
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { userName, password } });
  console.log(res);
}

signUp('test-1', 'test-2', 'test-3');
login('test-1', 'test-2');
// getUsers();