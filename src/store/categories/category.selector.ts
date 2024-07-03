import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';
import { TCategory } from '@/types';

// Селектор за извличане на категорията от Redux state
const selectCategoryReducer = (state: RootState) => state.categories;

// Селектор за извличане на масива от категории
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesArr
);

// Фабрична функция за създаване на селектор с параметър `title`
export const makeSelectProductsByCategory = (categoryTitle: string) => createSelector(
  [selectCategories],
  (categories) => {
    const category = categories.find(category => category.title === categoryTitle);
    return category ? category.products : [];
  }
);
