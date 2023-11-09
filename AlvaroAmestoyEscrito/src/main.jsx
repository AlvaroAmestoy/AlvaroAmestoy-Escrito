import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './pages/Home/HomePage.jsx'
import CreateUser from './pages/CreateUser/CreateUser.jsx'
import './index.css'

const router= createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/crear",
    element:<CreateUser/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
