import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Countries></Countries>,
        loader: () => fetch(`https://restcountries.com/v3.1/region/asia`)
      },
      {
        path: "/country/:countryId",
        element: <CountryDetails></CountryDetails>,
        loader: ({params}) => fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
