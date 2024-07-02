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
  const categoriesMap = useSelector(selectProductsByCategory);
  return (
    <Fragment>
      <Title>{category!.toUpperCase()}</Title>
      <CategoryContainer>
        {/* {products?.length > 0 ? (
          products.map((product:TProduct) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : ( )}*/}
        <span>There are no products left</span>
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
