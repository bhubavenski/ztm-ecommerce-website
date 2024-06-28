import { TProduct } from '@/types';
import React, { createContext, useEffect, useState } from 'react';

type TContextProps = {
  cartItems: TProduct[];
  addItemToCart: (product: TProduct) => void;
  cartCount: number;
  removeItemFromCart: (product: TProduct) => void;
  clearItemFromCart: (product: TProduct) => void;
  cartTotal: number;
};

export const CartDataContext = createContext<TContextProps>({
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
  cartTotal: 0
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

const removeCartItem = (cartItems: TProduct[], productToRemove: TProduct) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem?.quantity! === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity! - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: TProduct[], productToClear: TProduct) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

export const CartDataProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<TProduct[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (product: TProduct) =>
    setCartItems(addCartItem(cartItems, product));

  const removeItemFromCart = (product: TProduct) =>
    setCartItems(removeCartItem(cartItems, product));

  const clearItemFromCart = (product: TProduct) =>
    setCartItems(clearCartItem(cartItems, product));

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem: TProduct) => total + cartItem.quantity!,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem: TProduct) => total + cartItem.quantity! * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal
  };

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
