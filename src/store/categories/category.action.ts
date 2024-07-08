import { createAction } from '@/utils/reducer/reducer.utils';
import { TCATEGORIES_ACTION_TYPES } from './category';
import { DocumentData } from 'firebase/firestore';
import { getCategoriesAndDocuments } from '@/utils/firebase/firebase.utils';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../root-reducer';

export const fetchCategoriesStart = () =>
  createAction<TCATEGORIES_ACTION_TYPES>('category/FETCH_CATEGORIES_START');

export const fetchCategoriesSuccess = (categoriesArr: DocumentData[]) =>
  createAction<TCATEGORIES_ACTION_TYPES, DocumentData[]>(
    'category/FETCH_CATEGORIES_SUCCESS',
    categoriesArr
  );

export const fetchCategoriesFailed = (error: any) =>
  createAction<TCATEGORIES_ACTION_TYPES, string>(
    'category/FETCH_CATEGORIES_FAILED',
    error
  );

// Примерна thunk функция
export const fetchCategoriesAsync = () => async (dispatch : any) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArr = await getCategoriesAndDocuments('categories');
    dispatch(fetchCategoriesSuccess(categoriesArr));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};