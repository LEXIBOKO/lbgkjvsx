import React from 'react';
import './Student.css'
import {Badge, Layout, Menu} from "antd";
import HeaderComponent from "../../../components/Header/Header.jsx";
import StudentRoutes from "../../../routes/StudentRoutes.jsx";
import Sider from "antd/es/layout/Sider.js";
import {Content, Header} from "antd/es/layout/layout.js";
import {getStudentCourses, getStudentInfo} from "../../../entities/students.js";
import {getAllCourses} from "../../../entities/courses.js";
import {useNavigate} from "react-router-dom";

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
        label: 'Обязательные',
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
        <Layout className={'layout'}>
            <HeaderComponent title={'Добрый день, ' + student.name} />
            <Layout className={'layout'}>
                <Sider className={'student-menu'} >

                    <Menu theme={'dark'} items={items} className={'student-menu'} style={{color: 'white', paddingTop: '4px'}}
                          onClick={({ keyPath }) => {
                              console.log(keyPath)
                              navigate(`${keyPath}`)
                              // todo доработать синк выбора меню с рутами
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

export default Student;
