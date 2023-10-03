import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./components/Home";
import HTMLDefinition from "./components/HTMLDefinition";
import CSSDefinition from "./components/CSSDefinition";
import JSDefinition from "./components/JSDefinition";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/html",
    element: <HTMLDefinition />,
  },
  {
    path: "/css",
    element: <CSSDefinition />,
  },
  {
    path: "/JS",
    element: <JSDefinition />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider
    router={router}
    fallbackElement={<App />}
  />
)
