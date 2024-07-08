import { RootState } from '../root-reducer';

export const selectCurrentUser = (state: RootState) => {
  return state.user.currentUser;
};
