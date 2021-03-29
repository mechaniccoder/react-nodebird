import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
} from '@store/post';
import { addCommentApi, addPostApi, loadPostApi, postLikeApi, postUnLikeApi } from 'api/post';
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';

function* addPost(action: { type: string; payload: { content: string; userId: string | number } }): any {
  const { content, userId } = action.payload;
  try {
    const res = yield call(addPostApi, content, userId);
    yield put({
      type: ADD_POST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({ type: ADD_POST_FAILURE, payload: error.message });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* addComment(action: {
  type: typeof ADD_COMMENT_REQUEST;
  payload: { content: string; userId: number; postId: number };
}): any {
  const { content, userId, postId } = action.payload;
  try {
    const res = yield call(addCommentApi, content, userId, postId);
    yield put({ type: ADD_COMMENT_SUCCESS, payload: res.data });
  } catch (error) {
    yield put({ type: ADD_COMMENT_FAILURE, payload: error.message });
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* loadPost(): any {
  try {
    const res = yield call(loadPostApi);
    yield put({ type: LOAD_POST_SUCCESS, payload: res.data });
  } catch (error) {
    yield put({ type: LOAD_POST_FAILURE, payload: error.message });
  }
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* postLike(action: { type: typeof LIKE_POST_REQUEST; payload: any }): any {
  try {
    const res = yield call(postLikeApi, action.payload);
    yield put({ type: LIKE_POST_SUCCESS, payload: res.data });
  } catch (error) {
    yield put({ type: LIKE_POST_FAILURE, payload: error.message });
  }
}

function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, postLike);
}

function* postUnlike(action: { type: typeof UNLIKE_POST_REQUEST; payload: any }): any {
  try {
    const res = yield call(postUnLikeApi, action.payload);
    yield put({ type: UNLIKE_POST_SUCCESS, payload: res.data });
  } catch (error) {
    yield put({ type: UNLIKE_POST_FAILURE, payload: error.message });
  }
}

function* watchUnLikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, postUnlike);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchLoadPost),
    fork(watchLikePost),
    fork(watchUnLikePost),
  ]);
}
