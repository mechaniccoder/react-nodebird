import {
  login_failure,
  login_request,
  login_success,
  logout_failure,
  logout_request,
  logout_success,
} from '@store/user';
import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';

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

export default function* userSaga() {
  yield all([fork(watchLogout), fork(watchLogin)]);
}
