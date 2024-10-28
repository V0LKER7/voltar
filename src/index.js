import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';

const router = createBrowserRouter([{
  path: '/',
  element: <MainPage />,
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
