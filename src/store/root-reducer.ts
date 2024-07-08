import { combineReducers, Reducer } from 'redux';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';
import { TCartState, TCartAction } from './cart/cart';
import { TCategoryState, TCategoryAction } from './categories/category';
import { TUserState, TAction } from './user/user';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
