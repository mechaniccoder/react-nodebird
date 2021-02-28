export const loginIn = () => {
  return { type: 'LOG_IN' };
};

export const logOut = () => {
  return { type: 'LOG_OUT' };
};

interface InitialState {
  isLogIn: string | boolean;
  me: { id: number; nickname: string } | null;
  error: string | null;
}

const initialState: InitialState = {
  isLogIn: false,
  me: null,
  error: null,
};

interface Action {
  type:
    | 'LOG_IN'
    | 'LOG_OUT'
    | 'LOGIN_SUCCESS'
    | 'LOGIN_FAILURE'
    | 'LOGOUT_SUCCESS'
    | 'LOGOUT_FAILURE';
  payload: any;
}

export default function user(
  state = initialState,
  action: Action
): InitialState {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLogIn: 'loading',
        me: null,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogIn: true,
        me: action.payload,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLogIn: false,
        me: null,
        error: action.payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLogIn: 'loading',
        me: null,
        error: null,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isLogIn: false,
        me: null,
        error: null,
      };
    case 'LOGOUT_FAILURE':
      return {
        ...state,
        isLogIn: true,
        me: state.me,
        error: action.payload,
      };
    default:
      return state;
  }
}
