import { useShopDataContext } from '@/contexts/categories.context';
import './categories-preview.styles.scss';
import { Fragment } from 'react/jsx-runtime';
import CategoryPreview from '@/components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoriesMap } = useShopDataContext();
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
