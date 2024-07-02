import { useState, useEffect, Fragment, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import {
  selectCategoriesMap,
  selectProductsByCategory,
} from '../../store/categories/category.selector';

import { CategoryContainer, Title } from './category.styles';
import { TProduct } from '@/types';
import { RootState } from '@/store/root-reducer';

const Category = () => {
  console.log('MyComponent rendered');

  const { category } = useParams();
  const products = useSelector(function _selectProductsByCategory(
    state: RootState
  ) {
    return selectProductsByCategory(state, category!);
  });

  return (
    <Fragment>
      <Title>{category!.toUpperCase()}</Title>
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
