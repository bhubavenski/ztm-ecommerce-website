import { RootState } from "../root-reducer";

export const selectCategoriesMap = (state:RootState) => {
  console.log('categoriesArr =', state.categories.categoriesArr)
  const categoriesMap = state.categories.categoriesArr.reduce(
    (acc, { title, items }) => {
      console.log('acc=',acc)
      console.log('{}=',{title, items})
      

      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  return categoriesMap;
};

export const selectProductsByCategory = (state: RootState) => {
  const categoriesArr = state.categories.categoriesArr;
  console.log('categoriesArr33 =', categoriesArr)
  return categoriesArr;
}