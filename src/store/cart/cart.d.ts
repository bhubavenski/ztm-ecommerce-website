import { TProduct } from '@/types';

export type TState = {
  cartItems: TProduct[];
  cartCount: number;
  cartTotal: number;
};

export type TAction = {
  type: 'cart/SET_CART_ITEMS';
  payload: User;
};
