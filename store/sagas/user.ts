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
import { Action } from 'redux';
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';

function* login() {
  try {
    yield delay(2000);
    yield put({ type: login_success, payload: { nickname: '승환', id: 4 } });
  } catch (error) {
    yield put({ type: login_failure, payload: error });
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
  // This is how we can implement error handling with custom message.
  return fetch('http://localhost:4000/auth/signup', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (!res.ok) {
      return res.json().then((res) => {
        throw res;
      });
    }
    return res.json();
  });
}

function* signup(action: { type: typeof signup_request; payload: any }): any {
  try {
    const res = yield call(signupApi, action.payload);
    console.log(res);
    yield put({ type: signup_success, payload: res.data });
  } catch (error) {
    yield put({ type: signup_failure, payload: error });
  }
}

function* watchSignup() {
  yield takeLatest(signup_request, signup);
}

export default function* userSaga() {
  yield all([fork(watchLogout), fork(watchLogin), fork(watchSignup)]);
}
