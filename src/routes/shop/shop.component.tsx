import { fetchCategoriesAsync } from '@/store/categories/category.action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Shop;
