export const toggleLogInState = () => {
  return { type: 'TOGGLE_LOGIN' };
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
  type: 'TOGGLE_LOGIN';
}

export default function user(state = initialState, action: Action) {
  switch (action.type) {
    case 'TOGGLE_LOGIN':
      return {
        ...state,
        isLogIn: !state.isLogIn,
      };
    default:
      return state;
  }
}
