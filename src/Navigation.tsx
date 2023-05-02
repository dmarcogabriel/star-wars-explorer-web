import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '@pages/HomeScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    // errorElement: <Page404 />,
  },
]);

export default function Navigation() {
  return <RouterProvider router={router} />;
}
