import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/4-layouts/rootLayout/RootLayout';
import ErrorPage from './pages/Error';
import Users from './pages/Users';
import Auth from './components/4-layouts/auth/Auth';
import Login from './pages/Login';
import { NavRoutes } from './types/routes';
import Registration from './pages/Registration';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: NavRoutes.auth,
        element: <Auth />,
        children: [
          {
            
            path: NavRoutes.login,
            element: <Login />,
          },
          {
            path: NavRoutes.registration,
            element: <Registration />,
          },
        ]
      },
    ],
  },
]);
