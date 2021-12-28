import axios from 'axios';

export function loginUser({ username, password }) {
  return function (dispatch) {
    return axios.post(`http://localhost:8088/todoapp/api/auth/login`, { username, password })
      .then((response) => {
        localStorage.setItem('accessToken', response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}