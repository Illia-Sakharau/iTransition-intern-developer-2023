import { createBrowserRouter } from 'react-router-dom';
import { NavRoutes } from './routes';
import RootLayout from '../components/4-layouts/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import GamePage from '../pages/GamePage';
import NotFoundPage from '../pages/NotFoundPage';

export const routes = [
  {
    path: NavRoutes.homePagePath,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: NavRoutes.gamePagePath,
        element: (
          <GamePage />
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const routesConfig = createBrowserRouter(routes);
