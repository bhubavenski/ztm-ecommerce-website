import React, { Fragment, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { makeSelectProductsByCategory } from '../../store/categories/category.selector';
import { CategoryContainer, Title } from './category.styles';
import { TProduct } from '@/types';
import { RootState } from '@/store/root-reducer';

const Category = () => {
  console.log('MyComponent rendered');

  const { category } = useParams();
  const selectProducts = useMemo(() => makeSelectProductsByCategory(category || ''), [category]);
  const products = useSelector(selectProducts);

  return (
    <Fragment>
      <Title>{category?.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product: TProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
