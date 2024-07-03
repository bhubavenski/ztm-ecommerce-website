import { TAction, TState } from './cart';

const INITIAL_STATE: TState = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const cartReducer = (
  state: TState = INITIAL_STATE,
  action: TAction
): TState => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CART_ITEMS':
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};
