import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from "../src/router/Router"

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
