import { DocumentData } from 'firebase/firestore';
import { TCategoryAction, TCategoryState } from './category';

const INITIAL_VALUE = {
  categoriesArr: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state: TCategoryState = INITIAL_VALUE,
  action: TCategoryAction
): TCategoryState => {
  const { type, payload } = action;

  switch (type) {
    case 'category/FETCH_CATEGORIES_START': {
      return { ...state, isLoading: true };
    }
    case 'category/FETCH_CATEGORIES_SUCCESS': {
      return {
        ...state,
        categoriesArr: payload as DocumentData[],
        isLoading: false,
      };
    }
    case 'category/FETCH_CATEGORIES_FAILED': {
      return { ...state, error: payload as string, isLoading: false };
    }
    default:
      return state;
  }
};
