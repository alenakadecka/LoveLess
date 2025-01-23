import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ShopsAroundPage } from './Pages/ShopsAroundPage/ShopsAroundPage';
import { TestYourLifeStylePage } from './Pages/TestYourLifeStylePage/TestYourLifeStylePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/Pages/ShopsAroundPage/ShopsAroundPage',
    element: <ShopsAroundPage />,
  },
  {
    path: '/Pages/TestYourLifeStylePage/TestYourLifeStylePage',
    element: <TestYourLifeStylePage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </React.StrictMode>,
);
