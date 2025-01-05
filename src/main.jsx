import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routs/router.jsx'
import ContextProviderData from './DataProvider/ContextProviderData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProviderData>
      <RouterProvider router={router}></RouterProvider>
    </ContextProviderData>
  </StrictMode>,
)
