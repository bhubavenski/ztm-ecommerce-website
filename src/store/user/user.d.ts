import { User } from 'firebase/auth';

export type TState = {
  currentUser: User | null;
};

export type TActionTypes = 'SET_CURRENT_USER';

export type TAction = {
  type: TActionTypes;
  payload: User;
};
