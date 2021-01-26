export const loginIn = () => {
  return { type: 'LOG_IN' };
};

export const logOut = () => {
  return { type: 'LOG_OUT' };
};

interface InitialState {
  isLogIn: boolean;
  user: null;
}

const initialState: InitialState = {
  isLogIn: false,
  user: null,
};

interface Action {
  type: 'LOG_IN' | 'LOG_OUT';
}

export default function user(
  state = initialState,
  action: Action
): InitialState {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLogIn: true,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLogIn: false,
      };
    default:
      return state;
  }
}
