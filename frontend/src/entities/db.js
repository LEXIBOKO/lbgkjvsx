import cardCover1 from '../assets/cardCover1.jpg';
import cardCover2 from '../assets/cardCover2.jpg';
import cardCover3 from '../assets/cardCover3.jpg';
import cardCover4 from '../assets/cardCover4.jpg';
import cardCover5 from '../assets/cardCover5.jpg';
import cardCover6 from '../assets/cardCover6.jpg';
import cardCover7 from '../assets/cardCover7.jpg';
import cardCover8 from '../assets/cardCover8.jpg';
import cardCover9 from '../assets/cardCover9.jpg';
import cardCover10 from '../assets/cardCover10.jpg';
import cardCover11 from '../assets/cardCover11.jpg';
import cardCover12 from '../assets/cardCover12.jpg';
import cardCover13 from '../assets/cardCover13.jpg';
import cardCover14 from '../assets/cardCover14.jpg';
import cardCover15 from '../assets/cardCover15.jpg';
import cardCover16 from '../assets/cardCover16.jpg';
import cardCover17 from '../assets/cardCover17.jpg';
import cardCover18 from '../assets/cardCover18.jpg';
import cardCover19 from '../assets/cardCover19.jpg';
import cardCover20 from '../assets/cardCover20.jpg';
import fileAttached from '../assets/file.pdf'

// entities: student, teacher, course, group
// course: assigned, additional, completed

export const db = {
    "students": [
        {
            "id": "1",
            "name": "Евгений Курков",
            "email": "evgeniy.kurkov@example.com",
            "courses": {
                "assigned": [
                    {
                        "id": "1",
                        "name": "Генеративные нейросети",
                        "description": "Курс о генеративных нейросетях, их применении и создании моделей.",
                        "type": "Курс",
                        "teacher": {
                            "id": "1",
                            "name": "Носов Виктор Владимирович",
                            "email": "victor.nosov@example.com"
                        },
                        "progress": 75,
                        "image": cardCover3,
                        "file": fileAttached
                    },
                    {
                        "id": "2",
                        "name": "Глубокое изучение HTML",
                        "description": "Подробное изучение HTML, включая современные стандарты и лучшие практики.",
                        "type": "Курс с тестом",
                        "teacher": {
                            "id": "1",
                            "name": "Носов Виктор Владимирович",
                            "email": "victor.nosov@example.com"
                        },
                        "progress": 45,
                        "image": cardCover7,
                        "file": fileAttached
                    },
                    {
                        "id": "7",
                        "name": "Разработка веб-приложений на Django",
                        "description": "Курс по созданию веб-приложений с использованием фреймворка Django.",
                        "type": "Курс",
                        "teacher": {
                            "id": "1",
                            "name": "Носов Виктор Владимирович",
                            "email": "victor.nosov@example.com"
                        },
                        "progress": 70,
                        "image": cardCover12,
                        "file": fileAttached
                    }
                ],
                "additional": [
                    {
                        "id": "3",
                        "name": "Основы Python",
                        "description": "Введение в программирование на Python, основные конструкции и библиотеки.",
                        "type": "Курс",
                        "teacher": {
                            "id": "2",
                            "name": "Смирнова Анна Сергеевна",
                            "email": "anna.smirnova@example.com"
                        },
                        "progress": 90,
                        "image": cardCover5,
                        "file": fileAttached
                    },
                    {
                        "id": "12",
                        "name": "Разработка игр на Unity",
                        "description": "Курс по созданию игр с использованием движка Unity.",
                        "type": "Курс",
                        "teacher": {
                            "id": "2",
                            "name": "Смирнова Анна Сергеевна",
                            "email": "anna.smirnova@example.com"
                        },
                        "progress": 85,
                        "image": cardCover15,
                        "file": fileAttached
                    },
                    {
                        "id": "14",
                        "name": "Проектирование пользовательских интерфейсов",
                        "description": "Курс по проектированию и разработке пользовательских интерфейсов.",
                        "type": "Лекция",
                        "teacher": {
                            "id": "2",
                            "name": "Смирнова Анна Сергеевна",
                            "email": "anna.smirnova@example.com"
                        },
                        "progress": 60,
                        "image": cardCover18,
                        "file": null
                    }
                ],
                "completed": [
                    {
                        "id": "4",
                        "name": "Разработка мобильных приложений на React Native",
                        "description": "Курс по созданию кроссплатформенных мобильных приложений с использованием React Native.",
                        "type": "Лекция",
                        "teacher": {
                            "id": "2",
                            "name": "Смирнова Анна Сергеевна",
                            "email": "anna.smirnova@example.com"
                        },
                        "progress": 100,
                        "image": cardCover1,
                        "file": fileAttached
                    },
                    {
                        "id": "13",
                        "name": "Основы сетевых технологий",
                        "description": "Изучение основ сетевых технологий и протоколов.",
                        "type": "Курс",
                        "teacher": {
                            "id": "1",
                            "name": "Носов Виктор Владимирович",
                            "email": "victor.nosov@example.com"
                        },
                        "progress": 100,
                        "image": cardCover9,
                        "file": fileAttached
                    },
                    {
                        "id": "15",
                        "name": "Основы искусственного интеллекта",
                        "description": "Введение в основы искусственного интеллекта и его применение.",
                        "type": "Курс с тестом",
                        "teacher": {
                            "id": "3",
                            "name": "Иванов Дмитрий Александрович",
                            "email": "dmitriy.ivanov@example.com"
                        },
                        "progress": 100,
                        "image": cardCover19,
                        "file": fileAttached
                    }
                ]
            }
        },
        {
            "id": "2",
            "name": "Анна Иванова",
            "email": "anna.ivanova@example.com",
            "courses": {
                "assigned": [
                    {
                        "id": "5",
                        "name": "Алгоритмы и структуры данных",
                        "description": "Изучение основных алгоритмов и структур данных, необходимых для эффективного программирования.",
                        "type": "Курс с тестом",
                        "teacher": {
                            "id": "3",
                            "name": "Иванов Дмитрий Александрович",
                            "email": "dmitriy.ivanov@example.com"
                        },
                        "progress": 60,
                        "image": cardCover4,
                        "file": fileAttached
                    },
                    {
                        "id": "8",
                        "name": "Основы баз данных",
                        "description": "Изучение основ SQL и работы с реляционными базами данных.",
                        "type": "Курс с тестом",
                        "teacher": {
                            "id": "2",
                            "name": "Смирнова Анна Сергеевна",
                            "email": "anna.smirnova@example.com"
                        },
                        "progress": 55,
                        "image": cardCover8,
                        "file": fileAttached
                    },
                    {
                        "id": "10",
                        "name": "DevOps и автоматизация",
                        "description": "Курс по основам DevOps и автоматизации процессов разработки.",
                        "type": "Лекция",
                        "teacher": {
                            "id": "3",
                            "name": "Иванов Дмитрий Александрович",
                            "email": "dmitriy.ivanov@example.com"
                        },
                        "progress": 30,
                        "image": cardCover14,
                        "file": null
                    }
                ],
                "additional": [
                    {
                        "id": "6",
                        "name": "Введение в машинное обучение",
                        "description": "Основы машинного обучения и его применение в реальных задачах.",
                        "type": "Курс",
                        "teacher": {
                            "id": "3",
                            "name": "Иванов Дмитрий Александрович",
                            "email": "dmitriy.ivanov@example.com"
                        },
                        "progress": 85,
                        "image": cardCover6,
                        "file": fileAttached
                    },
                    {
                        "id": "9",
                        "name": "Продвинутый JavaScript",
                        "description": "Изучение продвинутых концепций и библиотек JavaScript.",
                        "type": "Курс",
                        "teacher": {
                            "id": "3",
                            "name": "Иванов Дмитрий Александрович",
                            "email": "dmitriy.ivanov@example.com"
                        },
                        "progress": 80,
                        "image": cardCover11,
                        "file": fileAttached
                    },
                    {
                        "id": "11",
                        "name": "Основы кибербезопасности",
                        "description": "Введение в основы кибербезопасности и защиты данных.",
                        "type": "Курс с тестом",
                        "teacher": {
                            "id": "3",
                            "name": "Иванов Дмитрий Александрович",
                            "email": "dmitriy.ivanov@example.com"
                        },
                        "progress": 65,
                        "image": cardCover16,
                        "file": fileAttached
                    }
                ],
                "completed": [
                    {
                        "id": "7",
                        "name": "Разработка веб-приложений на Django",
                        "description": "Курс по созданию веб-приложений с использованием фреймворка Django.",
                        "type": "Курс",
                        "teacher": {
                            "id": "1",
                            "name": "Носов Виктор Владимирович",
                            "email": "victor.nosov@example.com"
                        },
                        "progress": 100,
                        "image": cardCover2,
                        "file": fileAttached
                    },
                    {
                        "id": "12",
                        "name": "Разработка игр на Unity",
                        "description": "Курс по созданию игр с использованием движка Unity.",
                        "type": "Курс",
                        "teacher": {
                            "id": "2",
                            "name": "Смирнова Анна Сергеевна",
                            "email": "anna.smirnova@example.com"
                        },
                        "progress": 100,
                        "image": cardCover10,
                        "file": fileAttached
                    },
                    {
                        "id": "14",
                        "name": "Проектирование пользовательских интерфейсов",
                        "description": "Курс по проектированию и разработке пользовательских интерфейсов.",
                        "type": "Лекция",
                        "teacher": {
                            "id": "2",
                            "name": "Смирнова Анна Сергеевна",
                            "email": "anna.smirnova@example.com"
                        },
                        "progress": 100,
                        "image": cardCover17,
                        "file": fileAttached
                    }
                ]
            }
        },
        {
            "id": "3",
            "name": "Дмитрий Петров",
            "email": "dmitriy.petrov@example.com",
            "courses": {
                "assigned": [
                    {
                        "id": "3",
                        "name": "Основы Python",
                        "description": "Введение в программирование на Python, основные конструкции и библиотеки.",
                        "type": "Курс",
                        "teacher": {
                            "id": "2",
                            "name": "Смирнова Анна Сергеевна",
                            "email": "anna.smirnova@example.com"
                        },
                        "progress": 90,
                        "image": cardCover13,
                        "file": fileAttached
                    },
                    {
                        "id": "6",
                        "name": "Введение в машинное обучение",
                        "description": "Основы машинного обучения и его применение в реальных задачах.",
                        "type": "Курс",
                        "teacher": {
                            "id": "3",
                            "name": "Иванов Дмитрий Александрович",
                            "email": "dmitriy.ivanov@example.com"
                        },
                        "progress": 85,
                        "image": cardCover20,
                        "file": fileAttached
                    },
                    {
                        "id": "11",
                        "name": "Основы кибербезопасности",
                        "description": "Введение в основы кибербезопасности и защиты данных.",
                        "type": "Курс с тестом",
                        "teacher": {
                            "id": "3",
                            "name": "Иванов Дмитрий Александрович",
                            "email": "dmitriy.ivanov@example.com"
                        },
                        "progress": 65,
                        "image": cardCover2,
                        "file": fileAttached
                    }
                ],
                "additional": [
                    {
                        "id": "9",
                        "name": "Продвинутый JavaScript",
                        "description": "Изучение продвинутых концепций и библиотек JavaScript.",
                        "type": "Курс",
                        "teacher": {
                            "id": "3",
                            "name": "Иванов Дмитрий Александрович",
                            "email": "dmitriy.ivanov@example.com"
                        },
                        "progress": 80,
                        "image": cardCover4,
                        "file": fileAttached
                    },
                    {
                        "id": "13",
                        "name": "Основы сетевых технологий",
                        "description": "Изучение основ сетевых технологий и протоколов.",
                        "type": "Курс",
                        "teacher": {
                            "id": "1",
                            "name": "Носов Виктор Владимирович",
                            "email": "victor.nosov@example.com"
                        },
                        "progress": 75,
                        "image": cardCover8,
                        "file": fileAttached
                    },
                    {
                        "id": "15",
                        "name": "Основы искусственного интеллекта",
                        "description": "Введение в основы искусственного интеллекта и его применение.",
                        "type": "Курс с тестом",
                        "teacher": {
                            "id": "3",
                            "name": "Иванов Дмитрий Александрович",
                            "email": "dmitriy.ivanov@example.com"
                        },
                        "progress": 70,
                        "image": cardCover12,
                        "file": null
                    }
                ],
                "completed": [
                    {
                        "id": "4",
                        "name": "Разработка мобильных приложений на React Native",
                        "description": "Курс по созданию кроссплатформенных мобильных приложений с использованием React Native.",
                        "type": "Лекция",
                        "teacher": {
                            "id": "2",
                            "name": "Смирнова Анна Сергеевна",
                            "email": "anna.smirnova@example.com"
                        },
                        "progress": 100,
                        "image": cardCover5,
                        "file": fileAttached
                    },
                    {
                        "id": "8",
                        "name": "Основы баз данных",
                        "description": "Изучение основ SQL и работы с реляционными базами данных.",
                        "type": "Курс с тестом",
                        "teacher": {
                            "id": "2",
                            "name": "Смирнова Анна Сергеевна",
                            "email": "anna.smirnova@example.com"
                        },
                        "progress": 100,
                        "image": cardCover10,
                        "file": fileAttached
                    },
                    {
                        "id": "10",
                        "name": "DevOps и автоматизация",
                        "description": "Курс по основам DevOps и автоматизации процессов разработки.",
                        "type": "Лекция",
                        "teacher": {
                            "id": "3",
                            "name": "Иванов Дмитрий Александрович",
                            "email": "dmitriy.ivanov@example.com"
                        },
                        "progress": 100,
                        "image": cardCover15,
                        "file": fileAttached
                    }
                ]
            }
        }
    ],
    "teachers": [
        {
            "id": "1",
            "name": "Носов Виктор Владимирович",
            "email": "victor.nosov@example.com",
            "teacherCourses": [
                {
                    "id": "1",
                    "name": "Генеративные нейросети",
                    "description": "Курс о генеративных нейросетях, их применении и создании моделей.",
                    "type": "Курс",
                    "progress": 75,
                    "groups": ["220291", "220292"],
                    "studentsAssigned": 18,
                    "studentsTotal": 22,
                    "image": cardCover3,
                    "assignedGroups": ["220291", "220292", "230290"],
                    "file": fileAttached
                },
                {
                    "id": "2",
                    "name": "Глубокое изучение HTML",
                    "description": "Подробное изучение HTML, включая современные стандарты и лучшие практики.",
                    "type": "Курс с тестом",
                    "progress": 45,
                    "groups": ["220291", "220293"],
                    "studentsAssigned": 20,
                    "studentsTotal": 22,
                    "image": cardCover7,
                    "assignedGroups": ["220291", "230290", "230291"],
                    "file": fileAttached
                },
                {
                    "id": "7",
                    "name": "Разработка веб-приложений на Django",
                    "description": "Курс по созданию веб-приложений с использованием фреймворка Django.",
                    "type": "Курс",
                    "progress": 70,
                    "groups": ["220292", "230291"],
                    "studentsAssigned": 18,
                    "studentsTotal": 22,
                    "image": cardCover12,
                    "assignedGroups": ["220292", "230291", "240290"],
                    "file": fileAttached
                },
                {
                    "id": "13",
                    "name": "Основы сетевых технологий",
                    "description": "Изучение основ сетевых технологий и протоколов.",
                    "type": "Курс",
                    "progress": 75,
                    "groups": ["230292", "240290"],
                    "studentsAssigned": 18,
                    "studentsTotal": 22,
                    "image": cardCover8,
                    "assignedGroups": ["240290", "240291", "250290"],
                    "file": null
                }
            ]
        },
        {
            "id": "2",
            "name": "Смирнова Анна Сергеевна",
            "email": "anna.smirnova@example.com",
            "teacherCourses": [
                {
                    "id": "3",
                    "name": "Основы Python",
                    "description": "Введение в программирование на Python, основные конструкции и библиотеки.",
                    "type": "Курс",
                    "progress": 90,
                    "groups": ["220292", "230290"],
                    "studentsAssigned": 19,
                    "studentsTotal": 22,
                    "image": cardCover5,
                    "assignedGroups": ["220291", "220292", "240290"],
                    "file": fileAttached
                },
                {
                    "id": "4",
                    "name": "Разработка мобильных приложений на React Native",
                    "description": "Курс по созданию кроссплатформенных мобильных приложений с использованием React Native.",
                    "type": "Лекция",
                    "progress": 20,
                    "groups": ["220293", "230291"],
                    "studentsAssigned": 17,
                    "studentsTotal": 22,
                    "image": cardCover1,
                    "assignedGroups": ["230291", "240290", "250290"],
                    "file": fileAttached
                },
                {
                    "id": "8",
                    "name": "Основы баз данных",
                    "description": "Изучение основ SQL и работы с реляционными базами данных.",
                    "type": "Курс с тестом",
                    "progress": 55,
                    "groups": ["230292", "240291"],
                    "studentsAssigned": 19,
                    "studentsTotal": 22,
                    "image": cardCover18,
                    "assignedGroups": ["240291", "250290", "250291"],
                    "file": fileAttached
                },
                {
                    "id": "12",
                    "name": "Разработка игр на Unity",
                    "description": "Курс по созданию игр с использованием движка Unity.",
                    "type": "Курс",
                    "progress": 95,
                    "groups": ["240292", "250290"],
                    "studentsAssigned": 21,
                    "studentsTotal": 22,
                    "image": cardCover15,
                    "assignedGroups": ["250290", "250291", "260290"],
                    "file": fileAttached
                },
                {
                    "id": "14",
                    "name": "Проектирование пользовательских интерфейсов",
                    "description": "Курс по проектированию и разработке пользовательских интерфейсов.",
                    "type": "Лекция",
                    "progress": 40,
                    "groups": ["250291", "260290"],
                    "studentsAssigned": 17,
                    "studentsTotal": 22,
                    "image": cardCover17,
                    "assignedGroups": ["250291", "260290", "260291"],
                    "file": null
                }
            ]
        },
        {
            "id": "3",
            "name": "Иванов Дмитрий Александрович",
            "email": "dmitriy.ivanov@example.com",
            "teacherCourses": [
                {
                    "id": "5",
                    "name": "Алгоритмы и структуры данных",
                    "description": "Изучение основных алгоритмов и структур данных, необходимых для эффективного программирования.",
                    "type": "Курс с тестом",
                    "progress": 60,
                    "groups": ["230292", "240291"],
                    "studentsAssigned": 21,
                    "studentsTotal": 22,
                    "image": cardCover4,
                    "assignedGroups": ["240291", "250290", "250291"],
                    "file": fileAttached
                },
                {
                    "id": "6",
                    "name": "Введение в машинное обучение",
                    "description": "Основы машинного обучения и его применение в реальных задачах.",
                    "type": "Курс",
                    "progress": 85,
                    "groups": ["240292", "250291"],
                    "studentsAssigned": 20,
                    "studentsTotal": 22,
                    "image": cardCover20,
                    "assignedGroups": ["250291", "260290", "260291"],
                    "file": fileAttached
                },
                {
                    "id": "9",
                    "name": "Продвинутый JavaScript",
                    "description": "Изучение продвинутых концепций и библиотек JavaScript.",
                    "type": "Курс",
                    "progress": 80,
                    "groups": ["250292", "260290"],
                    "studentsAssigned": 20,
                    "studentsTotal": 22,
                    "image": cardCover11,
                    "assignedGroups": ["260290", "260291", "260292"],
                    "file": fileAttached
                },
                {
                    "id": "10",
                    "name": "DevOps и автоматизация",
                    "description": "Курс по основам DevOps и автоматизации процессов разработки.",
                    "type": "Лекция",
                    "progress": 30,
                    "groups": ["260291", "260292"],
                    "studentsAssigned": 17,
                    "studentsTotal": 22,
                    "image": cardCover14,
                    "assignedGroups": ["260292", "220291", "220292"],
                    "file": null
                },
                {
                    "id": "11",
                    "name": "Основы кибербезопасности",
                    "description": "Введение в основы кибербезопасности и защиты данных.",
                    "type": "Курс с тестом",
                    "progress": 65,
                    "groups": ["260292", "220293"],
                    "studentsAssigned": 19,
                    "studentsTotal": 22,
                    "image": cardCover16,
                    "assignedGroups": ["220293", "230290", "230291"],
                    "file": fileAttached
                },
                {
                    "id": "15",
                    "name": "Основы искусственного интеллекта",
                    "description": "Введение в основы искусственного интеллекта и его применение.",
                    "type": "Курс с тестом",
                    "progress": 85,
                    "groups": ["230291", "230292"],
                    "studentsAssigned": 20,
                    "studentsTotal": 22,
                    "image": cardCover19,
                    "assignedGroups": ["230292", "240290", "240291"],
                    "file": fileAttached
                }
            ]
        }
    ],
    "allCourses": [
        {
            "id": "1",
            "name": "Генеративные нейросети",
            "description": "Курс о генеративных нейросетях, их применении и создании моделей.",
            "type": "Курс",
            "teacher": {
                "id": "1",
                "name": "Носов Виктор Владимирович",
                "email": "victor.nosov@example.com"
            },
            "image": cardCover3,
            "assignedGroups": ["220291", "220292", "230290"],
            "file": fileAttached
        },
        {
            "id": "2",
            "name": "Глубокое изучение HTML",
            "description": "Подробное изучение HTML, включая современные стандарты и лучшие практики.",
            "type": "Курс с тестом",
            "teacher": {
                "id": "1",
                "name": "Носов Виктор Владимирович",
                "email": "victor.nosov@example.com"
            },
            "image": cardCover7,
            "assignedGroups": ["220291", "230290", "230291"],
            "file": fileAttached
        },
        {
            "id": "3",
            "name": "Основы Python",
            "description": "Введение в программирование на Python, основные конструкции и библиотеки.",
            "type": "Курс",
            "teacher": {
                "id": "2",
                "name": "Смирнова Анна Сергеевна",
                "email": "anna.smirnova@example.com"
            },
            "image": cardCover5,
            "assignedGroups": ["220291", "220292", "240290"],
            "file": fileAttached
        },
        {
            "id": "4",
            "name": "Разработка мобильных приложений на React Native",
            "description": "Курс по созданию кроссплатформенных мобильных приложений с использованием React Native.",
            "type": "Лекция",
            "teacher": {
                "id": "2",
                "name": "Смирнова Анна Сергеевна",
                "email": "anna.smirnova@example.com"
            },
            "image": cardCover1,
            "assignedGroups": ["230291", "240290", "250290"],
            "file": fileAttached
        },
        {
            "id": "5",
            "name": "Алгоритмы и структуры данных",
            "description": "Изучение основных алгоритмов и структур данных, необходимых для эффективного программирования.",
            "type": "Курс с тестом",
            "teacher": {
                "id": "3",
                "name": "Иванов Дмитрий Александрович",
                "email": "dmitriy.ivanov@example.com"
            },
            "image": cardCover4,
            "assignedGroups": ["240291", "250290", "250291"],
            "file": fileAttached
        },
        {
            "id": "6",
            "name": "Введение в машинное обучение",
            "description": "Основы машинного обучения и его применение в реальных задачах.",
            "type": "Курс",
            "teacher": {
                "id": "3",
                "name": "Иванов Дмитрий Александрович",
                "email": "dmitriy.ivanov@example.com"
            },
            "image": cardCover20,
            "assignedGroups": ["250291", "260290", "260291"],
            "file": fileAttached
        },
        {
            "id": "7",
            "name": "Разработка веб-приложений на Django",
            "description": "Курс по созданию веб-приложений с использованием фреймворка Django.",
            "type": "Курс",
            "teacher": {
                "id": "1",
                "name": "Носов Виктор Владимирович",
                "email": "victor.nosov@example.com"
            },
            "image": cardCover12,
            "assignedGroups": ["220292", "230291", "240290"],
            "file": fileAttached
        },
        {
            "id": "8",
            "name": "Основы баз данных",
            "description": "Изучение основ SQL и работы с реляционными базами данных.",
            "type": "Курс с тестом",
            "teacher": {
                "id": "2",
                "name": "Смирнова Анна Сергеевна",
                "email": "anna.smirnova@example.com"
            },
            "image": cardCover18,
            "assignedGroups": ["240291", "250290", "250291"],
            "file": fileAttached
        },
        {
            "id": "9",
            "name": "Продвинутый JavaScript",
            "description": "Изучение продвинутых концепций и библиотек JavaScript.",
            "type": "Курс",
            "teacher": {
                "id": "3",
                "name": "Иванов Дмитрий Александрович",
                "email": "dmitriy.ivanov@example.com"
            },
            "image": cardCover11,
            "assignedGroups": ["260290", "260291", "260292"],
            "file": fileAttached
        },
        {
            "id": "10",
            "name": "DevOps и автоматизация",
            "description": "Курс по основам DevOps и автоматизации процессов разработки.",
            "type": "Лекция",
            "teacher": {
                "id": "3",
                "name": "Иванов Дмитрий Александрович",
                "email": "dmitriy.ivanov@example.com"
            },
            "image": cardCover14,
            "assignedGroups": ["260292", "220291", "220292"],
            "file": null
        },
        {
            "id": "11",
            "name": "Основы кибербезопасности",
            "description": "Введение в основы кибербезопасности и защиты данных.",
            "type": "Курс с тестом",
            "teacher": {
                "id": "3",
                "name": "Иванов Дмитрий Александрович",
                "email": "dmitriy.ivanov@example.com"
            },
            "image": cardCover16,
            "assignedGroups": ["220293", "230290", "230291"],
            "file": fileAttached
        },
        {
            "id": "12",
            "name": "Разработка игр на Unity",
            "description": "Курс по созданию игр с использованием движка Unity.",
            "type": "Курс",
            "teacher": {
                "id": "2",
                "name": "Смирнова Анна Сергеевна",
                "email": "anna.smirnova@example.com"
            },
            "image": cardCover15,
            "assignedGroups": ["250290", "250291", "260290"],
            "file": fileAttached
        },
        {
            "id": "13",
            "name": "Основы сетевых технологий",
            "description": "Изучение основ сетевых технологий и протоколов.",
            "type": "Курс",
            "teacher": {
                "id": "1",
                "name": "Носов Виктор Владимирович",
                "email": "victor.nosov@example.com"
            },
            "image": cardCover8,
            "assignedGroups": ["240290", "240291", "250290"],
            "file": null
        },
        {
            "id": "14",
            "name": "Проектирование пользовательских интерфейсов",
            "description": "Курс по проектированию и разработке пользовательских интерфейсов.",
            "type": "Лекция",
            "teacher": {
                "id": "2",
                "name": "Смирнова Анна Сергеевна",
                "email": "anna.smirnova@example.com"
            },
            "image": cardCover17,
            "assignedGroups": ["250291", "260290", "260291"],
            "file": null
        },
        {
            "id": "15",
            "name": "Основы искусственного интеллекта",
            "description": "Введение в основы искусственного интеллекта и его применение.",
            "type": "Курс с тестом",
            "teacher": {
                "id": "3",
                "name": "Иванов Дмитрий Александрович",
                "email": "dmitriy.ivanov@example.com"
            },
            "image": cardCover19,
            "assignedGroups": ["230292", "240290", "240291"],
            "file": fileAttached
        }
    ],
    "groups": [
        {
            "id": "220291",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "1",
                    "name": "Генеративные нейросети"
                },
                {
                    "id": "2",
                    "name": "Глубокое изучение HTML"
                },
                {
                    "id": "3",
                    "name": "Основы Python"
                }
            ]
        },
        {
            "id": "220292",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "2",
                    "name": "Глубокое изучение HTML"
                },
                {
                    "id": "3",
                    "name": "Основы Python"
                },
                {
                    "id": "7",
                    "name": "Разработка веб-приложений на Django"
                }
            ]
        },
        {
            "id": "220293",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "4",
                    "name": "Разработка мобильных приложений на React Native"
                },
                {
                    "id": "2",
                    "name": "Глубокое изучение HTML"
                },
                {
                    "id": "13",
                    "name": "Основы сетевых технологий"
                }
            ]
        },
        {
            "id": "230290",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "2",
                    "name": "Глубокое изучение HTML"
                },
                {
                    "id": "8",
                    "name": "Основы баз данных"
                },
                {
                    "id": "14",
                    "name": "Проектирование пользовательских интерфейсов"
                }
            ]
        },
        {
            "id": "230291",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "7",
                    "name": "Разработка веб-приложений на Django"
                },
                {
                    "id": "4",
                    "name": "Разработка мобильных приложений на React Native"
                },
                {
                    "id": "1",
                    "name": "Генеративные нейросети"
                }
            ]
        },
        {
            "id": "230292",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "6",
                    "name": "Введение в машинное обучение"
                },
                {
                    "id": "12",
                    "name": "Разработка игр на Unity"
                },
                {
                    "id": "5",
                    "name": "Алгоритмы и структуры данных"
                }
            ]
        },
        {
            "id": "240290",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "12",
                    "name": "Разработка игр на Unity"
                },
                {
                    "id": "6",
                    "name": "Введение в машинное обучение"
                },
                {
                    "id": "11",
                    "name": "Основы кибербезопасности"
                }
            ]
        },
        {
            "id": "240291",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "15",
                    "name": "Основы искусственного интеллекта"
                },
                {
                    "id": "13",
                    "name": "Основы сетевых технологий"
                },
                {
                    "id": "9",
                    "name": "Продвинутый JavaScript"
                }
            ]
        },
        {
            "id": "240292",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "15",
                    "name": "Основы искусственного интеллекта"
                },
                {
                    "id": "10",
                    "name": "DevOps и автоматизация"
                },
                {
                    "id": "14",
                    "name": "Проектирование пользовательских интерфейсов"
                }
            ]
        },
        {
            "id": "250290",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "15",
                    "name": "Основы искусственного интеллекта"
                },
                {
                    "id": "13",
                    "name": "Основы сетевых технологий"
                },
                {
                    "id": "11",
                    "name": "Основы кибербезопасности"
                }
            ]
        },
        {
            "id": "250291",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "5",
                    "name": "Алгоритмы и структуры данных"
                },
                {
                    "id": "6",
                    "name": "Введение в машинное обучение"
                },
                {
                    "id": "11",
                    "name": "Основы кибербезопасности"
                }
            ]
        },
        {
            "id": "250292",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "9",
                    "name": "Продвинутый JavaScript"
                },
                {
                    "id": "10",
                    "name": "DevOps и автоматизация"
                },
                {
                    "id": "14",
                    "name": "Проектирование пользовательских интерфейсов"
                }
            ]
        },
        {
            "id": "260290",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "9",
                    "name": "Продвинутый JavaScript"
                },
                {
                    "id": "13",
                    "name": "Основы сетевых технологий"
                },
                {
                    "id": "15",
                    "name": "Основы искусственного интеллекта"
                }
            ]
        },
        {
            "id": "260291",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "10",
                    "name": "DevOps и автоматизация"
                },
                {
                    "id": "14",
                    "name": "Проектирование пользовательских интерфейсов"
                },
                {
                    "id": "15",
                    "name": "Основы искусственного интеллекта"
                }
            ]
        },
        {
            "id": "260292",
            "students": [
                {
                    "id": "1",
                    "name": "Евгений Курков",
                    "email": "evgeniy.kurkov@example.com"
                },
                {
                    "id": "2",
                    "name": "Анна Иванова",
                    "email": "anna.ivanova@example.com"
                },
                {
                    "id": "3",
                    "name": "Дмитрий Петров",
                    "email": "dmitriy.petrov@example.com"
                }
            ],
            "assignedCourses": [
                {
                    "id": "10",
                    "name": "DevOps и автоматизация"
                },
                {
                    "id": "11",
                    "name": "Основы кибербезопасности"
                },
                {
                    "id": "15",
                    "name": "Основы искусственного интеллекта"
                }
            ]
        }
    ]
}
