import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getAllCourses} from "../../entities/courses.js";
import cardCover3 from "../../assets/cardCover3.jpg";
import './CoursePage.css'
import {Button} from "antd";
import {ArrowLeftOutlined, BackwardOutlined} from "@ant-design/icons";
import PDFViewer from 'pdf-viewer-reactjs'


const CoursePage = () => {
    const params = useParams();
    const allCourses = getAllCourses();

    const currentCourse = allCourses[params.id-1];

    console.log(currentCourse.file)

    const renderPage = (num) => {
        // Using promise to fetch the page
        pdfDoc.getPage(num).then(function (page) {
            const viewport = page.getViewport({scale: scale});
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            page.render(renderContext);
        });
    }

    // useEffect(() => {
    //     canvas.height = viewport.height;
    //     // canvas.width = viewport.width;
    //     return () => {
    //         canvas.clearRect(0, 0, canvas.width, canvas.height);
    //     }
    // }, [currentCourse])

    return (
        <div>
            <Button icon={<ArrowLeftOutlined />} variant={'text'} onClick={() => history.back()}>Назад</Button>
            <br/>
            <br/>
            <img className={'cover'} src={currentCourse.image} alt={currentCourse.name}/>
            <h1>{currentCourse.name}</h1>
            <div className={'wrapper'}>
                <h3>{currentCourse.type}</h3>
                <p className={'description'}>{currentCourse.description}</p>
            </div>

            <div className={'wrapper'}>
                <p><b>Преподаватель:</b></p>
                <p>{currentCourse.teacher.name}</p>
                <p>{currentCourse.teacher.email}</p>
            </div>

            <h2>Содержание Курса</h2>


            {currentCourse.file ? (
                // todo стабилизировать отображение документов
                <PDFViewer document={{
                    url: currentCourse.file,
                    page: 1,
                }} />
            ) : (
                <p>Нет доступного к просмотру содержания</p>
            )}

        </div>
    );
};

export default CoursePage;
