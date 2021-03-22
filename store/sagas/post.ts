import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
} from '@store/post';
import fetch from 'node-fetch';

function addPostApi(data: { id: string; text: string }) {
  return fetch('http://localhost:4000/post', {
    method: 'post',
    body: JSON.stringify({
      content: data.text,
      id: data.id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    // TODO: de-dep callback
    if (!res.ok) {
      return res.json().then((err) => {
        throw new Error(err);
      });
    }
    return res.json();
  });
}

function* addPost(action: { type: string; payload: any }): any {
  try {
    const res = yield call(addPostApi, action.payload);
    console.log(res);
    yield put({
      type: ADD_POST_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({ type: ADD_POST_FAILURE, payload: error.message });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
