import { TProduct } from '@/types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { TCART_ACTION_TYPES } from './cart';

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

export const addItemToCart = (cartItems:TProduct[], productToAdd: TProduct) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction<TCART_ACTION_TYPES,TProduct[]>('SET_CART_ITEMS', newCartItems);
};

export const removeItemFromCart = (cartItems:TProduct[], cartItemToRemove: TProduct) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction<TCART_ACTION_TYPES,TProduct[]>('SET_CART_ITEMS', newCartItems);
};

export const clearItemFromCart = (cartItems:TProduct[], cartItemToClear: TProduct) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction<TCART_ACTION_TYPES,TProduct[]> ('SET_CART_ITEMS', newCartItems);
};