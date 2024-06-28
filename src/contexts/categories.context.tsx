import { CategoryMap } from '@/types';
import React, { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocuments } from '@/utils/firebase/firebase.utils';

type TContextProps = {
  categoriesMap: CategoryMap;
  setCategoriesMap: React.Dispatch<React.SetStateAction<CategoryMap>>;
};

export const UserContext = createContext<TContextProps>({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

type Props = {
  children: React.ReactNode;
};

export const ShopDataProvider = ({ children }: Props) => {
  const [categoriesMap, setCategoriesMap] = useState<CategoryMap>({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap, setCategoriesMap };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useShopDataContext() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error(
      'useShopDataContext must be used within a ShopDataProvider'
    );
  }
  return context;
}
