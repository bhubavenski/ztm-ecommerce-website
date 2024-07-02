import { RootState } from "../root-reducer";

export const selectCategoriesMap = (state:RootState) => {
  console.log('categoriesArr =', state)
  const categoriesMap = state.categories.categoriesArr.reduce(
    (acc, { title, items }) => {
      console.log('acc=',acc)
      console.log('{}=',{title, items})
      

      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  console.log('categoriesMap =', categoriesMap)
  return categoriesMap;
};

export const selectProductsByCategory = (state: RootState, categories: string) => {
  const category = state.categories.categoriesArr.find(category => category.title === categories);
  console.log('selectProductsByCategory fired =', category)
  return category ? category.products : [];
}