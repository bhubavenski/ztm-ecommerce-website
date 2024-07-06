import { TCartAction, TCartState } from './cart';

const INITIAL_STATE: TCartState = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const cartReducer = (
  state: TCartState = INITIAL_STATE,
  action: TCartAction
): TCartState => {
  const { type, payload } = action;

  switch (type) {
    case 'cart/SET_CART_ITEMS':
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};
