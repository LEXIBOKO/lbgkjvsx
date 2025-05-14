import './App.css'
import Student from "./pages/Main/Student/Student.jsx";
import React, {createContext, useContext} from "react";
import Teacher from "./pages/Main/Teacher/Teacher.jsx";
import {ConfigProvider} from "antd";


function App() {
    const UserContext = createContext('student');

      return (
          <>
              <UserContext.Provider value={'student'}>
                  <Student />
              </UserContext.Provider>

              {/*<Teacher />*/}
          </>
      )
}

export default App
