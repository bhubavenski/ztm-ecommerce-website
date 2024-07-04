import { User } from 'firebase/auth';

export type TState = {
  currentUser: User | null;
};

export type TAction = {
  type: 'user/SET_CURRENT_USER';
  payload: User;
};
