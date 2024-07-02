import { RootState } from '../root-reducer';

export const selectCurrentUser = (state: RootState) => {
  console.log('selectCurrentUser fired');
  return state.user.currentUser;
};
