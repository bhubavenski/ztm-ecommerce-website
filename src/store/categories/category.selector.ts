import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';

const selectCategoryReducer = (state: RootState) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesArr
);

export const makeSelectProductsByCategory = (categoryTitle: string) =>
  createSelector([selectCategories], (categories) => {
    const category = categories.find(
      (category) => category.title.toLowerCase() === categoryTitle.toLowerCase()
    );
    return category ? category.products : [];
  });
