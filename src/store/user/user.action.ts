import { User } from 'firebase/auth';
import { TUSER_ACTION_TYPES } from './user';
import { createAction } from '@/utils/reducer/reducer.utils';

export const setCurrentUser = (user: User) => {
  console.log('USE EFFECT setCurrentUser fired');

  return createAction<TUSER_ACTION_TYPES, User>('SET_CURRENT_USER', user);
};
