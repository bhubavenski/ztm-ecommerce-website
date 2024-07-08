import { TProduct } from '@/types';

export type TCartState = {
  cartItems: TProduct[];
};

export type TCART_ACTION_TYPES = 'cart/SET_CART_ITEMS'

export type TCartAction = {
  type: TCART_ACTION_TYPES;
  payload: TProduct[];
};
