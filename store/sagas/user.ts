import {
  load_user_failure,
  load_user_request,
  load_user_success,
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
import { loadUserApi, loginApi, logoutApi, signupApi } from 'api/auth';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

function* login(action: { type: typeof login_request; payload: any }): any {
  try {
    const { email, password } = action.payload;
    const res = yield call(loginApi, email, password);
    yield put({ type: login_success, payload: res.data });
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
    yield call(logoutApi);
    yield put({ type: logout_success });
  } catch (error) {
    yield put({ type: logout_failure, payload: error.message });
  }
}

function* watchLogout() {
  yield takeLatest(logout_request, logout);
}

function* signup(action: { type: typeof signup_request; payload: any }): any {
  try {
    const { email, nickname, password } = action.payload;
    const res = yield call(signupApi, email, nickname, password);
    console.log(res);
    yield put({ type: signup_success, payload: res.data });
  } catch (error) {
    yield put({ type: signup_failure, payload: error.message });
  }
}

function* watchSignup() {
  yield takeLatest(signup_request, signup);
}

function* loadUser(): any {
  try {
    const res = yield call(loadUserApi);
    yield put({ type: load_user_success, payload: res.data });
  } catch (error) {
    yield put({ type: load_user_failure, payload: error.message });
  }
}

function* watchLoadUser() {
  yield takeLatest(load_user_request, loadUser);
}

export default function* userSaga() {
  yield all([fork(watchLogout), fork(watchLogin), fork(watchSignup), fork(watchLoadUser)]);
}
