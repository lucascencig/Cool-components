import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './Components/LandingPage.jsx';
import TextComponentesLayout from './Components/Layouts/TextComponentsLayout/TextComponentesLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/text-components",
    element: <TextComponentesLayout />,
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(


  <RouterProvider router={router} />

)