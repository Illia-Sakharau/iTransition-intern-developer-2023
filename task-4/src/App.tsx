import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ErrorPage from './pages/Error';
import Users from './pages/Users';
import Auth from './layouts/Auth';
import Login from './pages/Login';
import { NavRoutes } from './types/routes';
import Registration from './pages/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';

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
