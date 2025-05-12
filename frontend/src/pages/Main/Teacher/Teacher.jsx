import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {getStudentCourses, getStudentInfo} from "../../../entities/students.js";
import {getAllCourses} from "../../../entities/courses.js";
import {Badge, Layout, Menu} from "antd";
import HeaderComponent from "../../../components/Header/Header.jsx";
import StudentRoutes from "../../../routes/StudentRoutes.jsx";
import {Content} from "antd/es/layout/layout.js";
import Sider from "antd/es/layout/Sider.js";
import {getTeacherCourses, getTeacherInfo} from "../../../entities/teachers.js";

const teacher = getTeacherInfo();
const teacherCourses = getTeacherCourses();
const allCourses = getAllCourses()

const items = [
    {
        key: '/teachercourses',
        label: 'Мои курсы',
        icon: <Badge color={'white'} style={{color: 'black', paddingTop: '4px'}} count={teacherCourses.length} />,
    },
    // {
    //     key: '/assigned',
    //     label: 'Назначенные',
    //     icon: <Badge color={'white'} style={{color: 'black', paddingTop: '4px'}} count={studentCourses.assigned.length}/>
    // },
    // {
    //     key: '/additional',
    //     label: 'Дополнительные',
    //     icon: <Badge color={'white'} style={{color: 'black', paddingTop: '4px'}} count={studentCourses.additional.length}/>
    // },
    // {
    //     key: '/completed',
    //     label: 'Завершенные',
    //     icon: <Badge color={'white'} style={{color: 'black', paddingTop: '4px'}} count={studentCourses.assigned.length + studentCourses.additional.length}/>
    // },

]

const Teacher = () => {
    const navigate = useNavigate();

    return (
        <Layout className={'layout'}>
            <HeaderComponent title={'Добрый день, ' + teacher.name} />
            <Layout className={'layout'}>
                <Sider className={'menu'} >

                    <Menu theme={'dark'} items={items} className={'menu'} style={{color: 'white', paddingTop: '4px'}}
                          onClick={({ keyPath }) => {
                              console.log(keyPath)
                              navigate(`${keyPath}`)
                          }}
                    />
                </Sider>

                <Content className="content">

                    <StudentRoutes />

                </Content>
            </Layout>
        </Layout>
    );
};

export default Teacher;
