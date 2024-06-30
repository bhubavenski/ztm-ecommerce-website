import React from 'react';
import ReactDOM from 'react-dom/client';
// import './globals.css';
import './index.scss';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/home/home.component.tsx';
import Shop from './routes/shop/shop.component.tsx';
import Auth from './routes/auth/auth.component.tsx';
import { ShopDataProvider } from './contexts/categories.context.tsx';
import { CartDataProvider } from './contexts/cart.context.tsx';
import CheckOut from './routes/check-out/check-out.component.tsx';
import CategoriesPreview from './routes/categories-preview.componen/categories-preview.component.tsx';
import Category from './routes/category/category.component.tsx';
import { store } from './store/store.ts';
import Root from './routes/root/root.component.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop/*',
        element: <Shop />,
        children: [
          {
            index: true,
            element: <CategoriesPreview />,
          },
          {
            path: ':category',
            element: <Category />,
          },
        ],
      },
      {
        path: 'checkout',
        element: <CheckOut />,
      },
      {
        path: 'auth',
        element: <Auth />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <ShopDataProvider>
        <CartDataProvider>
          <RouterProvider router={router} />
        </CartDataProvider>
      </ShopDataProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
