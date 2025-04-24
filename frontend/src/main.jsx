import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import RoutesAuth from "./routes/routesAuth.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <RoutesAuth />
          {/*<App />*/}
      </BrowserRouter>
  </StrictMode>,
)
