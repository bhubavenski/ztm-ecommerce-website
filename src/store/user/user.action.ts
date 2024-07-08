import { User } from 'firebase/auth';
import { TUSER_ACTION_TYPES } from './user';
import { createAction } from '@/utils/reducer/reducer.utils';

export const setCurrentUser = (user: User) => {
  return createAction<TUSER_ACTION_TYPES, User>('user/SET_CURRENT_USER', user);
};
