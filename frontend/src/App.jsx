import './App.css'
import Student from "./pages/Main/Student/Student.jsx";
import React, {createContext, useContext} from "react";
import Teacher from "./pages/Main/Teacher/Teacher.jsx";
import {ConfigProvider} from "antd";
import Welcome from "./pages/Welcome/Welcome.jsx";


function App() {
    const UserContext = createContext('student');

      return (
          <>
            {/*<Welcome/>*/}
            <Student />
            {/*<Teacher />*/}
          </>
      )
}

export default App
