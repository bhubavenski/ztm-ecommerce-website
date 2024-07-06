import { User } from 'firebase/auth';

export type TUserState = {
  currentUser: User | null;
};

export type TUSER_ACTION_TYPES = 'user/SET_CURRENT_USER';

export type TAction = {
  type: 'user/SET_CURRENT_USER';
  payload: User;
};
