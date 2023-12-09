import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/rootLayout/RootLayout';
import ErrorPage from './pages/error/Error';
import Users from './pages/users/Users';
import Auth from './layouts/auth/Auth';
import Login from './pages/login/Login';
import { NavRoutes } from './types/routes';
import Registration from './pages/registration/Registration';

const router = createBrowserRouter([
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

function App() {
  return <RouterProvider router={router} />;
}

export default App
