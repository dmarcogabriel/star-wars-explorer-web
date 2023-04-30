import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage, Page404 } from '@pages/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Page404 />,
  },
]);

export default function Navigation() {
  return <RouterProvider router={router} />;
}
