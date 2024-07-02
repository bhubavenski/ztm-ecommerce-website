import { createAction } from '@/utils/reducer/reducer.utils';
import { TCATEGORIES_ACTION_TYPES } from './category';
import { DocumentData } from 'firebase/firestore';

export const setCategories = (categoriesArr: DocumentData[]) =>
  createAction<TCATEGORIES_ACTION_TYPES, DocumentData[]>(
    'category/SET_CATEGORIES',
    categoriesArr
  );
