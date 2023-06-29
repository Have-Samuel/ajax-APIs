/* eslint-disable no-undef */
async function getUsers(token) {
  const res = await axios.get('https://hack-or-snooze.herokuapp.com/users', { params: { token } });
  console.log(res);
}

async function signUp(userName, password, name) {
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { userName, password, name } });
  console.log(res);
}

async function login(userName, password) {
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', { user: { userName, password } });
  console.log(res);
  // Return the token
  return res.data.token;
}

signUp('test-1', 'test-2', 'test-3');

// async function getUserWithAuth() {
//   const token = await login('test-1', 'test-2');
//   getUsers(token);
// }

// Another EndPoint
async function createStory() {
  const token = await login('test-1', 'test-2');
  const newStory = {
    token,
    story: {
      author: 'Popos',
      title: 'LookingIn',
      url: 'http://chickensForLife.com',
    },
  };
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', newStory);
  console.log(res);
}

// getUserWithAuth();
createStory();
