import { setCategories } from '@/store/categories/category.action';
import { getCategoriesAndDocuments } from '@/utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Shop = () => {
  console.log('Shop component rendered')
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const categoriesArr = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArr));
    })();
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Shop;
