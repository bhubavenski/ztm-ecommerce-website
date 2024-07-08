import { createStore, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from './root-reducer';

const middleWares: Middleware[] = [
  process.env.NODE_ENV === 'development' && logger,
  thunk // поставете thunk middleware тук
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
