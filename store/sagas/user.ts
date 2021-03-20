import {
  login_failure,
  login_request,
  login_success,
  logout_failure,
  logout_request,
  logout_success,
  signup_failure,
  signup_request,
  signup_success,
} from '@store/user';

import fetch from 'node-fetch';

import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

function loginApi(data: { email: string; password: string }) {
  return fetch('http://localhost:4000/auth/login', {
    method: 'post',

    body: JSON.stringify(data),

    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (!res.ok) {
      return res.json().then((error) => {
        throw new Error(error);
      });
    }

    return res.json();
  });
}

function* login(action: { type: typeof login_request; payload: any }): any {
  try {
    const res = yield call(loginApi, action.payload);
    yield put({ type: login_success, payload: res });
  } catch (error) {
    console.log(error);
    yield put({ type: login_failure, payload: error.message });
  }
}

function* watchLogin() {
  yield takeLatest(login_request, login);
}

function* logout() {
  try {
    yield put({ type: logout_success });
  } catch (error) {
    yield put({ type: logout_failure, payload: error.message });
  }
}

function* watchLogout() {
  yield takeLatest(logout_request, logout);
}

function signupApi(data: {
  email: string;
  nickname: string;
  password: string;
}) {
  return fetch('http://localhost:4000/auth/signup', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (!res.ok) {
      return res.json().then((data) => {
        throw new Error(data);
      });
    }

    return res.json();
  });
}

function* signup(action: { type: typeof signup_request; payload: any }): any {
  try {
    const res = yield call(signupApi, action.payload);
    console.log(res);
    yield put({ type: signup_success, payload: res });
  } catch (error) {
    yield put({ type: signup_failure, payload: error.message });
  }
}

function* watchSignup() {
  yield takeLatest(signup_request, signup);
}

export default function* userSaga() {
  yield all([fork(watchLogout), fork(watchLogin), fork(watchSignup)]);
}
