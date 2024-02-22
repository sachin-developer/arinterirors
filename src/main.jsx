import "tw-elements-react/dist/css/tw-elements-react.min.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import PortfolioPage from "./components/PortfolioPage";
import "./index.css";
const router = createBrowserRouter([
  {path:"/", element:<HomePage/>},
  {path:"/about", element:<AboutPage/>},
  {path:"/portfolio", element:<PortfolioPage/>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
