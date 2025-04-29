import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '@ant-design/v5-patch-for-react-19';
import Welcome from "./pages/Welcome/Welcome.jsx";
import Login from "./pages/Auth/Login/Login.jsx";
import Register from "./pages/Auth/Register/Register.jsx";
import Student from "./pages/Main/Student/Student.jsx";
import AllCourses from "./pages/Main/Student/AllCourses/AllCourses.jsx";
import MainTeacher from "./pages/Main/MainTeacher.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </StrictMode>,
)
