import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About.jsx';
import Header from './Components/Header.jsx';
import Experince from './Components/Experince.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children: [
      {
        path: "/",
        element: <Header/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/experince",
        element: <Experince/>,
      },
      {
        path: "/work",
        element: <Projects/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
       <App />
    </RouterProvider>
   
  </React.StrictMode>,
)
