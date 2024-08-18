import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    element: <Auth />,
    children: [
      {
        path: '',
      },
    ],
  },
]);

export default router;
