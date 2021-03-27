import axios from 'axios';

export const signupApi = (email: string, nickname: string, password: string) => {
  return axios.post('/auth/signup', {
    email,
    nickname,
    password,
  });
};

export const loginApi = (email: string, password: string) => {
  return axios.post('/auth/login', {
    email,
    password,
  });
};

export const logoutApi = () => {
  return axios.post('/auth/logout');
};

export const loadUserApi = () => {
  return axios.get('/auth');
};
