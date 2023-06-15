import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Home.jsx'
import Posts from './Posts.jsx'
import Dashboard from './Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
