import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';

import reportWebVitals from './reportWebVitals';

import './index.css';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import NoPage from './pages/NoPage';
import Blog from './components/Blog';
import Contact from './pages/Contact';
import { BlogsLayout } from './components/BlogsLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NoPage />,
    children: [
      {
        path: "blogs/",
        element: <BlogsLayout/>
      },
      {
        path: "blogs/:blogId",
        element: <Blog/>
      },
      {
        path: "contact/",
        element: <Contact/>
      }
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
