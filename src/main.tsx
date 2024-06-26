import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/home/home.component.tsx';
import Shop from './routes/shop/shop.component.tsx';
import Navigation from './routes/navigation/navigation.components.tsx';
import SignIn from './routes/sign-in/sign-in.component.tsx';

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
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
