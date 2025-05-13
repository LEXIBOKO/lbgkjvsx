import React, {useRef} from 'react';
import {Button, DatePicker, Input, Select} from "antd";
import './CourseEditorPage.css'
import TextArea from "antd/es/input/TextArea.js";
import FileUploader from "../../../../components/FileUploader/FileUploader.jsx";
import Tiptap from "./Editor/Tiptap.jsx";

const optionsCourseTypes = [
    {value: 'courseWithTest', label: 'Курс с тестом'},
    {value: 'course', label: 'Курс'},
    {value: 'lecture', label: 'Лекция'},
];

const optionsGroupsToAssign = [
    {
        label: <span>1 курс</span>,
        title: '1 курс',
        options: [
            { label: <span>220291</span>, value: '220291' },
            { label: <span>220292</span>, value: '220292' },
        ],
    },
    {
        label: <span>2 курс</span>,
        title: 'manager',
        options: [
            { label: <span>220293</span>, value: '220293' },
            { label: <span>230290</span>, value: '230290' },
        ],
    },
    {
        label: <span>3 курс</span>,
        title: 'manager',
        options: [
            { label: <span>230291</span>, value: '230291' },
            { label: <span>230292</span>, value: '230292' },
        ],
    },
    {
        label: <span>4 курс</span>,
        title: 'manager',
        options: [
            { label: <span>240290</span>, value: '240290' },
            { label: <span>240291</span>, value: '240291' },
        ],
    },
    {
        label: <span>5 курс</span>,
        title: 'manager',
        options: [
            { label: <span>240292</span>, value: '240292' },
            { label: <span>250290</span>, value: '250290' },
        ],
    },
    {
        label: <span>Магистратура 1 курс</span>,
        title: 'manager',
        options: [
            { label: <span>250291</span>, value: '250291' },
            { label: <span>260291</span>, value: '260291' },
        ],
    },
    {
        label: <span>Магистратура 2 курс</span>,
        title: 'manager',
        options: [
            { label: <span>250292</span>, value: '250292' },
            { label: <span>260290</span>, value: '260290' },
        ],
    },

];

const CourseEditorPage = () => {

    return (
        <div>
            <h1>Создать курс</h1>
            <div className={'formItem'}>
                <label className={'label'}>
                    Название курса
                    <Input/>
                </label>
            </div>

            <div className={'formItem'}>
                <label className={'label'}>
                    Тип курса
                    <br/>
                    <Select className={'selectType'} options={optionsCourseTypes}/>
                </label>
            </div>

            <div className={'formItem'}>
                <label className={'label'}>
                    Описание
                    <TextArea/>
                </label>
            </div>
            <div className={'formItem'}>
                <label className={'label'}>
                    Срок выполнения до:
                    <br/>
                    <DatePicker/>
                </label>
            </div>
            <div className={'formItem'}>
                <label className={'label'}>
                    Прикрепить файл:
                    <FileUploader/>
                </label>
            </div>
            <div className={'formItem'}>
                <label className={'label'}>
                    Назначить на группы:
                    <br/>
                    <Select mode={'multiple'} className={'selectType'} options={optionsGroupsToAssign}/>
                </label>
            </div>
            <div className={'formItem'}>
                <h3>Текст курса/лекции</h3>
                <div className={'textArea'}>
                    <Tiptap/>
                </div>
            </div>

            <Button size={'large'} type={'primary'}>
                Добавить курс
            </Button>
        </div>
    );
};

export default CourseEditorPage;
