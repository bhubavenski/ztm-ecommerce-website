import { TProduct } from '@/types';
import React, { createContext, useState } from 'react';
import PRODUCTS from '@/constants/shop-data.json'

type TContextProps = {
  products: TProduct[];
  setProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
};

export const UserContext = createContext<TContextProps>({
  products: PRODUCTS,
  setProducts: () => null,
});

type Props = {
  children: React.ReactNode;
};

export const ShopDataProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<TProduct[]>(PRODUCTS);
  const value = { products, setProducts };

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
