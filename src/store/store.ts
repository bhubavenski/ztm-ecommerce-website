import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, RootState } from './root-reducer';

const middleWares: Middleware[] = [
  process.env.NODE_ENV === 'development' && logger,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
