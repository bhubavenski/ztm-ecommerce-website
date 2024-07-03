import { TProduct } from '@/types';

export type TState = {
  cartItems: TProduct[];
  cartCount: number;
  cartTotal: number;
};

export type TCART_ACTION_TYPES = 'SET_CART_ITEMS';

export type TAction = {
  type: TCART_ACTION_TYPES;
  payload: User;
};
