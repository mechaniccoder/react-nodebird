import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';

function* addPost() {
  try {
    yield delay(1000);
    yield put({
      type: 'ADD_POST_SUCCESS',
    });
  } catch (error) {
    yield put({ type: 'ADD_POST_FAILURE', payload: error.message });
  }
}

function* watchAddPost() {
  yield takeLatest('ADD_POST', addPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
