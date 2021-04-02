export const login_request = 'user/login_request';
export const login_success = 'user/login_success';
export const login_failure = 'user/login_failure';

export const logout_request = 'user/logout_request';
export const logout_success = 'user/logout_success';
export const logout_failure = 'user/logout_failure';

export const signup_request = 'user/signup_request';
export const signup_success = 'user/signup_success';
export const signup_failure = 'user/signup_failure';

export const load_user_request = 'user/load_user_request';
export const load_user_success = 'user/load_user_success';
export const load_user_failure = 'user/load_user_failure';

export const update_nickname_request = 'user/update_nickname_request';
export const update_nickname_success = 'user/update_nickname_success';
export const update_nickname_failure = 'user/update_nickname_failure';

export const loginInRequest = (email: string, password: string) => {
  return { type: login_request, payload: { email, password } };
};

export const logOutRequest = () => {
  return { type: logout_request };
};

export const signupRequest = (data: { email: string; nickname: string; password: string }) => {
  return { type: signup_request, payload: data };
};

export const loadUserRequest = () => {
  return { type: load_user_request };
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
  loginLoading: boolean;
  loginError: string | null;
  signupLoading: boolean;
  signupDone: boolean;
  signupError: string | null;
  loadUserLoading: boolean;
  loadUserError: string | null;
  updateNicknameLoading: boolean;
  updateNicknameError: string | null;
}

const initialState: InitialState = {
  loading: false,
  me: null,
  error: null,
  loginLoading: false,
  loginError: null,
  signupLoading: false,
  signupDone: false,
  signupError: null,
  loadUserLoading: false,
  loadUserError: null,
  updateNicknameLoading: false,
  updateNicknameError: null,
};

interface Me {
  id: number;
  nickname: string;
  Followers: [];
  Followings: [];
  Posts: [];
}

const parseMe = (data: Me): Me => {
  return {
    id: data.id,
    nickname: data.nickname,
    Followers: data.Followers,
    Followings: data.Followings,
    Posts: data.Posts,
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
    | typeof signup_failure
    | typeof load_user_request
    | typeof load_user_success
    | typeof load_user_failure
    | typeof update_nickname_request
    | typeof update_nickname_success
    | typeof update_nickname_failure;
  payload: any;
}

export default function user(state = initialState, action: Action): InitialState {
  switch (action.type) {
    case signup_request:
      return {
        ...state,
        me: null,
        error: null,
        signupLoading: true,
        signupDone: false,
        signupError: null,
      };
    case signup_success:
      return {
        ...state,
        signupLoading: false,
        signupDone: true,
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
        loginLoading: true,
        me: null,
        loginError: null,
      };
    case login_success:
      return {
        ...state,
        loginLoading: false,
        me: parseMe(action.payload),
        loginError: null,
      };
    case login_failure:
      return {
        ...state,
        loginLoading: false,
        me: null,
        loginError: action.payload,
      };
    case logout_request:
      return {
        ...state,
        loading: true,
        me: null,
        error: null,
      };
    case logout_success:
      return {
        ...state,
        loading: false,
        me: null,
        error: null,
      };
    case logout_failure:
      return {
        ...state,
        loading: false,
        me: state.me,
        error: action.payload,
      };
    case load_user_request:
      return {
        ...state,
        loadUserLoading: true,
        loadUserError: null,
      };
    case load_user_success:
      return {
        ...state,
        loadUserLoading: false,
        me: action.payload,
        loadUserError: null,
      };
    case load_user_failure:
      return {
        ...state,
        loadUserLoading: false,
        loadUserError: action.payload,
      };
    case update_nickname_request:
      return {
        ...state,
        updateNicknameLoading: true,
        updateNicknameError: null,
      };
    case update_nickname_success:
      return {
        ...state,
        me: { ...state.me!, nickname: action.payload.nickname },
        updateNicknameLoading: false,
        updateNicknameError: null,
      };
    case update_nickname_failure:
      return {
        ...state,
        updateNicknameLoading: false,
        updateNicknameError: action.payload,
      };
    default:
      return state;
  }
}
