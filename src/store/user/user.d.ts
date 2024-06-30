import { User } from 'firebase/auth';

export type TState = {
  currentUser: User | null;
};

export type TUSER_ACTION_TYPES = 'SET_CURRENT_USER';

export type TAction = {
  type: TUSER_ACTION_TYPES;
  payload: User;
};
