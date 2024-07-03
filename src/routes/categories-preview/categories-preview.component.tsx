import './categories-preview.styles.scss';
import { Fragment } from 'react/jsx-runtime';
import CategoryPreview from '@/components/category-preview/category-preview.component';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/root-reducer';
import { isCategoryMap } from '@/utils/utils';

const CategoriesPreview = () => {
  const categoriesArr = useSelector(
    (state: RootState) => state.categories.categoriesArr
  );
  return (
    <Fragment>
      {categoriesArr.length > 0 ? (
          categoriesArr.map((category)=> <CategoryPreview key={category.title} title={category.title} products={category.products} />)
      ) : (
        <span>There is no categories</span>
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
