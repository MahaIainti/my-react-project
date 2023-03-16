import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import General from './pages/General';
import ErrorPage from './pages/ErrorPage';
import AboutConstelations from './pages/AboutConstelations';
import WorkFormat from './pages/WorkFormat';
import Reviews from './pages/Reviews';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <General />,
      },
      {
        path: "about constelations",
        element: <AboutConstelations />,
      },
      {
        path: "work format",
        element: <WorkFormat />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);