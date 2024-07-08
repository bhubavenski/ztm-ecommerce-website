import { TCategoryMap } from '@/types';
import { DocumentData } from 'firebase/firestore';

export type TCategoryState = {
  categoriesArr: DocumentData[] | [];
  isLoading: boolean,
  error: string | null
};

export type TCATEGORIES_ACTION_TYPES =
  | 'category/FETCH_CATEGORIES_START'
  | 'category/FETCH_CATEGORIES_SUCCESS'
  | 'category/FETCH_CATEGORIES_FAILED';

export type TCategoryAction = {
  type: TCATEGORIES_ACTION_TYPES;
  payload: DocumentData[] | string;
};
