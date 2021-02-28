import { useMemo } from 'react';
import { createStore, applyMiddleware, Store, Dispatch, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducer';
import thunkMiddleware from 'redux-thunk';

let store: Store | undefined | null;

const logger = (dispatch: Dispatch, getState: any) => (next: any) => (
  action: Action
) => {
  console.log(action);
  return next(action);
};

function initStore(preloadedState: any) {
  const middlewares: any = [logger, thunkMiddleware];

  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
}

export const initializeStore = (preloadedState: any) => {
  let _store: Store = store ?? initStore(preloadedState);

  // 클라이언트에서 첫 렌더링 후 store를 합친다.
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    store = undefined;
  }

  // ssr, ssg는 서버 환경에서 실행되므로 항상 새로운 store를 반환함.
  if (typeof window === 'undefined') return _store;

  // 클라이언트 환경에서 처음 렌더링될때 store를 생성
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
