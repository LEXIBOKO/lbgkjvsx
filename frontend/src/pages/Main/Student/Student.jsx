import React from 'react';
import Header from "../../../components/Header/Header.jsx";
import {getStudentCourses, getStudentInfo} from "../../../entities/students.js";
import './Student.css'
import {Badge, Menu} from "antd";
import {getAllCourses} from "../../../entities/courses.js";
import {useNavigate} from "react-router-dom";
import PageContent from "../../../components/PageContent/PageContent.jsx";

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
        key: '/complete',
        label: 'Завершенные',
        icon: <Badge color={'white'} style={{color: 'black', paddingTop: '4px'}} count={studentCourses.assigned.length + studentCourses.additional.length}/>
    },

]

const Student = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header title={'Добрый день, ' + student.name}/>

            <div>
                <Menu theme={'dark'} items={items} className={'menu'} style={{color: 'white', paddingTop: '4px'}}
                      onClick={({ item, key, keyPath, domEvent }) => {
                          console.log(key)
                          navigate(`${key}`)
                      }}
                />
            </div>

            <PageContent />
        </div>
    );
};

export default Student;
