export const login_request = 'user/login_request';
export const login_success = 'user/login_success';
export const login_failure = 'user/login_failure';

export const logout_request = 'user/logout_request';
export const logout_success = 'user/logout_success';
export const logout_failure = 'user/logout_failure';

export const signup_request = 'user/signup_request';
export const signup_success = 'user/signup_success';
export const signup_failure = 'user/signup_failure';

export const loginInRequest = () => {
  return { type: login_request };
};

export const logOutRequest = () => {
  return { type: logout_request };
};

export const signupRequest = (data: {
  email: string;
  nickname: string;
  password: string;
}) => {
  return { type: signup_request, payload: data };
};

interface InitialState {
  loading: boolean;
  me: {
    id: number;
    nickname: string;
    Followers: any[];
    Followings: any[];
  } | null;
  error: string | null;
  signupLoading: boolean;
  signupError: string | null;
}

const initialState: InitialState = {
  loading: false,
  me: null,
  error: null,
  signupLoading: false,
  signupError: null,
};

interface Me {
  id: number;
  nickname: string;
  Followers: [];
  Followings: [];
}

const parseMe = (data: Me): Me => {
  return {
    id: data.id,
    nickname: data.nickname,
    Followers: [],
    Followings: [],
  };
};

interface Action {
  type:
    | typeof login_request
    | typeof login_success
    | typeof login_failure
    | typeof logout_request
    | typeof logout_success
    | typeof logout_failure
    | typeof signup_request
    | typeof signup_success
    | typeof signup_failure;
  payload: any;
}

export default function user(
  state = initialState,
  action: Action
): InitialState {
  switch (action.type) {
    case signup_request:
      return {
        ...state,
        me: null,
        error: null,
        signupLoading: true,
        signupError: null,
      };
    case signup_success:
      return {
        ...state,
        signupLoading: false,
      };
    case signup_failure:
      return {
        ...state,
        me: null,
        signupLoading: false,
        signupError: action.payload,
      };
    case login_request:
      return {
        ...state,
        loading: true,
        me: null,
        error: null,
      };
    case login_success:
      return {
        ...state,
        loading: false,
        me: parseMe(action.payload),
        error: null,
      };
    case login_failure:
      return {
        ...state,
        loading: false,
        me: null,
        error: action.payload,
      };
    case logout_request:
      return {
        ...state,
        loading: true,
        me: null,
        error: null,
      };
    case 'user/logout_success':
      return {
        ...state,
        loading: false,
        me: null,
        error: null,
      };
    case 'user/logout_failure':
      return {
        ...state,
        loading: false,
        me: state.me,
        error: action.payload,
      };
    default:
      return state;
  }
}
