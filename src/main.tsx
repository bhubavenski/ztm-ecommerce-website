import React from 'react';
import ReactDOM from 'react-dom/client';
// import './globals.css';
import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/home/home.component.tsx';
import Shop from './routes/shop/shop.component.tsx';
import Navigation from './routes/navigation/navigation.components.tsx';
import Auth from './routes/auth/auth.component.tsx';
import { UserProvider } from './contexts/user.context.tsx';
import { ShopDataProvider } from './contexts/categories.context.tsx';
import { CartDataProvider } from './contexts/cart.context.tsx';
import CheckOut from './routes/check-out/check-out.component.tsx';
import CategoriesPreview from './routes/categories-preview.componen/categories-preview.component.tsx';
import Category from './routes/category/category.component.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
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
            element: <CategoriesPreview/>
          },
          {
            path: ':category',
            element: <Category/>
          }
        ]
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
    <UserProvider>
      <ShopDataProvider>
        <CartDataProvider>
          <RouterProvider router={router} />
        </CartDataProvider>
      </ShopDataProvider>
    </UserProvider>
  </React.StrictMode>
);
