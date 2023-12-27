import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Space } from './pages/Space';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,    
  },
  {
    path: '/:id',
    element: <Space />,    
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
