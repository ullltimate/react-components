import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './error-page.tsx'
import Test from './Test.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <Test />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/product/:id`,
    element: <Product />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
