import { TAction, TState } from './user';

const INITIAL_STATE: TState = {
  currentUser: null,
};

export const userReducer = (
  state: TState = INITIAL_STATE,
  action: TAction
): TState => {
  const { type, payload } = action;

  switch (type) {
    case 'user/SET_CURRENT_USER': {
      return { ...state, currentUser: payload };
    }
    default:
      return state;
  }
};
