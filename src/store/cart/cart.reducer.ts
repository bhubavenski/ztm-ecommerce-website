// import { TCartAction, TCartState } from './cart';

// const INITIAL_STATE: TCartState = {
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

// export const cartReducer = (
//   state: TCartState = INITIAL_STATE,
//   action: TCartAction
// ): TCartState => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'cart/SET_CART_ITEMS':
//       return {
//         ...state,
//         cartItems: payload,
//       };
//     default:
//       return state;
//   }
// };

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProduct } from '@/types';
import { TCartState } from './cart';

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

const INITIAL_STATE: TCartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart(state: TCartState, action: PayloadAction<TProduct>) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state: TCartState, action: PayloadAction<TProduct>) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart(state: TCartState, action: PayloadAction<TProduct>) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearItemFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
