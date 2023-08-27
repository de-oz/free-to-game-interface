import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import MainPage from './routes/MainPage.jsx';
import GamePage from './routes/GamePage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MainPage />} />
      <Route path=":gameId" element={<GamePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
