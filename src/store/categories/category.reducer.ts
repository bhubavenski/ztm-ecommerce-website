import { TCategoryAction, TCategoryState } from './category';

const INITIAL_VALUE = {
  categoriesArr: [],
};

export const categoriesReducer = (
  state: TCategoryState = INITIAL_VALUE,
  action: TCategoryAction
): TCategoryState => {
  const { type, payload } = action;

  switch (type) {
    case 'category/SET_CATEGORIES': {
      return { ...state, categoriesArr: payload };
    }
    default:
      return state;
  }
};
