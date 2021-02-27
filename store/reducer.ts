import { combineReducers } from 'redux';

import user from './user';
import post from './post';

export const rootReducer = combineReducers({ user, post });

export type rootState = ReturnType<typeof rootReducer>;
