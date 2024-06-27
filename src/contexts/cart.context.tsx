import { TProduct } from '@/types';
import React, { createContext, useEffect, useState } from 'react';
import PRODUCTS from '@/constants/shop-data.json';

type TContextProps = {
  cartItems: TProduct[];
  addItemToCart: (product: TProduct) => void;
  cartCount: number;
};

export const CartDataContext = createContext<TContextProps>({
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
});

type Props = {
  children: React.ReactNode;
};

export const addCartItem = (cartItems: TProduct[], productToAdd: TProduct) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity! + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartDataProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<TProduct[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  const addItemToCart = (product: TProduct) =>
    setCartItems(addCartItem(cartItems, product));

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem: TProduct) => total + cartItem.quantity!,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = { cartItems, addItemToCart, cartCount };

  return (
    <CartDataContext.Provider value={value}>
      {children}
    </CartDataContext.Provider>
  );
};

export function useCartDataContext() {
  const context = React.useContext(CartDataContext);
  if (!context) {
    throw new Error(
      'useCartDataContext must be used within a CartDataProvider'
    );
  }
  return context;
}
