import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';

function* login(action: { type: string; payload: any }) {
  try {
    yield delay(2000);
    yield put({ type: 'LOGIN_SUCCESS', payload: { nickname: '승환', id: 4 } });
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', payload: error.message });
  }
}

function* watchLogin() {
  yield takeLatest('LOG_IN', login);
}

function* logout() {
  try {
    yield put({ type: 'LOGOUT_SUCCESS' });
  } catch (error) {
    yield put({ type: 'LOGOUT_FAILURE', payload: error.message });
  }
}

function* watchLogout() {
  yield takeLatest('LOG_OUT', logout);
}

export default function* userSaga() {
  yield all([fork(watchLogout), fork(watchLogin)]);
}
