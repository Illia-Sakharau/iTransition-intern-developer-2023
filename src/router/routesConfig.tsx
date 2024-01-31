import { createBrowserRouter } from 'react-router-dom';
import { NavRoutes } from './routes';
import RootLayout from '../components/4-layouts/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import GameLayout from '../components/4-layouts/GameLayout';
import NotFoundPage from '../pages/NotFoundPage';
import { GAMES_INGO } from '../costants/games';

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
          <GameLayout />
        ),
        children: GAMES_INGO.map((game) => ({
          path: game.id,
          element: game.page,
        }))
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const routesConfig = createBrowserRouter(routes);
