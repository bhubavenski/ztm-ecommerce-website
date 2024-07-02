import { TAction, TState } from './category';

const INITIAL_VALUE = {
  categoriesArr: [],
};

export const categoriesReducer = (
  state: TState = INITIAL_VALUE,
  action: TAction
): TState => {
  const { type, payload } = action;

  switch (type) {
    case 'category/SET_CATEGORIES': {
      return { ...state, categoriesArr: payload };
    }
    default:
      return state;
  }
};
