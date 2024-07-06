import { TAction, TUserState } from './user';

const INITIAL_STATE: TUserState = {
  currentUser: null,
};

export const userReducer = (
  state: TUserState = INITIAL_STATE,
  action: TAction
): TUserState => {
  const { type, payload } = action;

  switch (type) {
    case 'user/SET_CURRENT_USER': {
      return { ...state, currentUser: payload };
    }
    default:
      return state;
  }
};
