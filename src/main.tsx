import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, RouteObject, createBrowserRouter } from 'react-router-dom'
import Users from './pages/Users/Users.tsx'


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Users />,
  }
]
const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>,
)
