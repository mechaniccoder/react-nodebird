export const loginIn = () => {
  return { type: 'LOG_IN', payload: { id: 4 } };
};

export const logOut = () => {
  return { type: 'LOG_OUT' };
};

interface InitialState {
  isLogIn: boolean;
  me: { id: number } | null;
}

const initialState: InitialState = {
  isLogIn: false,
  me: null,
};

interface Action {
  type: 'LOG_IN' | 'LOG_OUT';
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
        isLogIn: true,
        me: action.payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLogIn: false,
        me: null,
      };
    default:
      return state;
  }
}
