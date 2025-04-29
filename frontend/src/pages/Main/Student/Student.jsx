import React from 'react';
import {getStudentCourses, getStudentInfo} from "../../../entities/students.js";
import './Student.css'
import {Badge, Layout, Menu} from "antd";
import {getAllCourses} from "../../../entities/courses.js";
import {Link, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import PageContent from "../../../components/PageContent/PageContent.jsx";
import Sider from "antd/es/layout/Sider.js";
import {Content, Header} from "antd/es/layout/layout.js";
import AllCourses from "./AllCourses/AllCourses.jsx";
import Assigned from "./Assigned/Assigned.jsx";
import Additional from "./Additional/Additional.jsx";
import Completed from "./Completed/Completed.jsx";
import HeaderComponent from "../../../components/Header/Header.jsx";
import Logo from "../../../assets/logoHorizontal.svg?react";
import AppRoutes from "../../../routes/AppRoutes.jsx";
import ProtectedRoutes from "../../../routes/ProtectedRoutes.jsx";
import StudentRoutes from "../../../routes/AppRoutes.jsx";

const student = getStudentInfo();
const studentCourses = getStudentCourses();
const allCourses = getAllCourses()

const items = [
    {
        key: '/allcourses',
        label: 'Все курсы',
        icon: <Badge color={'white'} style={{color: 'black', paddingTop: '4px'}} count={allCourses.length} />,
    },
    {
        key: '/assigned',
        label: 'Назначенные',
        icon: <Badge color={'white'} style={{color: 'black', paddingTop: '4px'}} count={studentCourses.assigned.length}/>
    },
    {
        key: '/additional',
        label: 'Дополнительные',
        icon: <Badge color={'white'} style={{color: 'black', paddingTop: '4px'}} count={studentCourses.additional.length}/>
    },
    {
        key: '/completed',
        label: 'Завершенные',
        icon: <Badge color={'white'} style={{color: 'black', paddingTop: '4px'}} count={studentCourses.assigned.length + studentCourses.additional.length}/>
    },

]

const Student = () => {
    const navigate = useNavigate();
    return (

        <Layout >
                <HeaderComponent title={'Добрый день, ' + student.name} />

            <Layout>
                <Sider>
                    <Menu theme={'dark'} items={items} className={'menu'} style={{color: 'white', paddingTop: '4px'}}
                          onClick={({ keyPath }) => {
                              console.log(keyPath)
                              navigate(`${keyPath}`)
                          }}
                    />
                </Sider>

                <Content>
                    content

                    <Outlet />
                    {/*<Routes>*/}
                    {/*    <Route element={<StudentRoutes />}>*/}
                    {/*        <Route path="/allcourses" element={<AllCourses />} />*/}
                    {/*        <Route path="/assigned" element={<Assigned />} />*/}
                    {/*        <Route path="/additional" element={<Additional />} />*/}
                    {/*        <Route path="/completed" element={<Completed />} />*/}

                    {/*    </Route>*/}
                    {/*    /!*<Route path="/main-student" element={<Student />} />*!/*/}

                    {/*</Routes>*/}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Student;
