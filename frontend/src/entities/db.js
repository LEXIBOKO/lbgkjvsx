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
                        "progress": 75
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
                        "progress": 45
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
                        "progress": 100
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
                        "id": "4",
                        "name": "Разработка мобильных приложений на React Native",
                        "description": "Курс по созданию кроссплатформенных мобильных приложений с использованием React Native.",
                        "type": "Лекция",
                        "teacher": {
                            "id": "2",
                            "name": "Смирнова Анна Сергеевна",
                            "email": "anna.smirnova@example.com"
                        },
                        "progress": 20
                    }
                ],
                "additional": [
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
                        "progress": 60
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
                        "id": "6",
                        "name": "Введение в машинное обучение",
                        "description": "Основы машинного обучения и его применение в реальных задачах.",
                        "type": "Курс",
                        "teacher": {
                            "id": "3",
                            "name": "Иванов Дмитрий Александрович",
                            "email": "dmitriy.ivanov@example.com"
                        },
                        "progress": 85
                    }
                ],
                "additional": [
                    {
                        "id": "7",
                        "name": "Разработка веб-приложений на Django",
                        "description": "Курс по созданию веб-приложений с использованием фреймворка Django.",
                        "type": "Курс",
                        "teacher": {
                            "id": "4",
                            "name": "Кузнецова Ольга Петровна",
                            "email": "olga.kuznetsova@example.com"
                        },
                        "progress": 70
                    }
                ]
            }
        },
        {
            "id": "4",
            "name": "Мария Смирнова",
            "email": "maria.smirnova@example.com",
            "courses": {
                "assigned": [
                    {
                        "id": "8",
                        "name": "Основы баз данных",
                        "description": "Изучение основ SQL и работы с реляционными базами данных.",
                        "type": "Курс с тестом",
                        "teacher": {
                            "id": "4",
                            "name": "Кузнецова Ольга Петровна",
                            "email": "olga.kuznetsova@example.com"
                        },
                        "progress": 55
                    }
                ],
                "additional": [
                    {
                        "id": "9",
                        "name": "Продвинутый JavaScript",
                        "description": "Изучение продвинутых концепций и библиотек JavaScript.",
                        "type": "Курс",
                        "teacher": {
                            "id": "5",
                            "name": "Петров Алексей Викторович",
                            "email": "alexey.petrov@example.com"
                        },
                        "progress": 80
                    }
                ]
            }
        },
        {
            "id": "5",
            "name": "Иван Кузнецов",
            "email": "ivan.kuznetsov@example.com",
            "courses": {
                "assigned": [
                    {
                        "id": "10",
                        "name": "DevOps и автоматизация",
                        "description": "Курс по основам DevOps и автоматизации процессов разработки.",
                        "type": "Лекция",
                        "teacher": {
                            "id": "5",
                            "name": "Петров Алексей Викторович",
                            "email": "alexey.petrov@example.com"
                        },
                        "progress": 30
                    }
                ],
                "additional": [
                    {
                        "id": "11",
                        "name": "Основы кибербезопасности",
                        "description": "Введение в основы кибербезопасности и защиты данных.",
                        "type": "Курс с тестом",
                        "teacher": {
                            "id": "6",
                            "name": "Соколова Юлия Михайловна",
                            "email": "yulia.sokolova@example.com"
                        },
                        "progress": 65
                    }
                ]
            }
        },
        {
            "id": "6",
            "name": "Ольга Васильева",
            "email": "olga.vasilyeva@example.com",
            "courses": {
                "assigned": [
                    {
                        "id": "12",
                        "name": "Разработка игр на Unity",
                        "description": "Курс по созданию игр с использованием движка Unity.",
                        "type": "Курс",
                        "teacher": {
                            "id": "6",
                            "name": "Соколова Юлия Михайловна",
                            "email": "yulia.sokolova@example.com"
                        },
                        "progress": 95
                    }
                ],
                "additional": [
                    {
                        "id": "13",
                        "name": "Основы сетевых технологий",
                        "description": "Изучение основ сетевых технологий и протоколов.",
                        "type": "Курс",
                        "teacher": {
                            "id": "7",
                            "name": "Васильев Иван Сергеевич",
                            "email": "ivan.vasilyev@example.com"
                        },
                        "progress": 75
                    }
                ]
            }
        },
        {
            "id": "7",
            "name": "Алексей Соколов",
            "email": "alexey.sokolov@example.com",
            "courses": {
                "assigned": [
                    {
                        "id": "14",
                        "name": "Проектирование пользовательских интерфейсов",
                        "description": "Курс по проектированию и разработке пользовательских интерфейсов.",
                        "type": "Лекция",
                        "teacher": {
                            "id": "7",
                            "name": "Васильев Иван Сергеевич",
                            "email": "ivan.vasilyev@example.com"
                        },
                        "progress": 40
                    }
                ],
                "additional": [
                    {
                        "id": "15",
                        "name": "Основы искусственного интеллекта",
                        "description": "Введение в основы искусственного интеллекта и его применение.",
                        "type": "Курс с тестом",
                        "teacher": {
                            "id": "8",
                            "name": "Попова Мария Александровна",
                            "email": "maria.popova@example.com"
                        },
                        "progress": 85
                    }
                ]
            }
        },
        {
            "id": "8",
            "name": "Юлия Попова",
            "email": "yulia.popova@example.com",
            "courses": {
                "assigned": [
                    {
                        "id": "16",
                        "name": "Разработка мобильных приложений на Flutter",
                        "description": "Курс по созданию мобильных приложений с использованием Flutter.",
                        "type": "Курс",
                        "teacher": {
                            "id": "8",
                            "name": "Попова Мария Александровна",
                            "email": "maria.popova@example.com"
                        },
                        "progress": 50
                    }
                ],
                "additional": []
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
                    "groups": ["220291", "210344"],
                    "studentsAssigned": 18,
                    "studentsTotal": 22
                },
                {
                    "id": "2",
                    "name": "Глубокое изучение HTML",
                    "description": "Подробное изучение HTML, включая современные стандарты и лучшие практики.",
                    "type": "Курс с тестом",
                    "progress": 45,
                    "groups": ["220291", "210345"],
                    "studentsAssigned": 20,
                    "studentsTotal": 22
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
                    "groups": ["220292", "210346"],
                    "studentsAssigned": 19,
                    "studentsTotal": 22
                },
                {
                    "id": "4",
                    "name": "Разработка мобильных приложений на React Native",
                    "description": "Курс по созданию кроссплатформенных мобильных приложений с использованием React Native.",
                    "type": "Лекция",
                    "progress": 20,
                    "groups": ["220293", "210347"],
                    "studentsAssigned": 17,
                    "studentsTotal": 22
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
                    "groups": ["220294", "210348"],
                    "studentsAssigned": 21,
                    "studentsTotal": 22
                },
                {
                    "id": "6",
                    "name": "Введение в машинное обучение",
                    "description": "Основы машинного обучения и его применение в реальных задачах.",
                    "type": "Курс",
                    "progress": 85,
                    "groups": ["220295", "210349"],
                    "studentsAssigned": 20,
                    "studentsTotal": 22
                }
            ]
        },
        {
            "id": "4",
            "name": "Кузнецова Ольга Петровна",
            "email": "olga.kuznetsova@example.com",
            "teacherCourses": [
                {
                    "id": "7",
                    "name": "Разработка веб-приложений на Django",
                    "description": "Курс по созданию веб-приложений с использованием фреймворка Django.",
                    "type": "Курс",
                    "progress": 70,
                    "groups": ["220296", "210350"],
                    "studentsAssigned": 18,
                    "studentsTotal": 22
                },
                {
                    "id": "8",
                    "name": "Основы баз данных",
                    "description": "Изучение основ SQL и работы с реляционными базами данных.",
                    "type": "Курс с тестом",
                    "progress": 55,
                    "groups": ["220297", "210351"],
                    "studentsAssigned": 19,
                    "studentsTotal": 22
                }
            ]
        },
        {
            "id": "5",
            "name": "Петров Алексей Викторович",
            "email": "alexey.petrov@example.com",
            "teacherCourses": [
                {
                    "id": "9",
                    "name": "Продвинутый JavaScript",
                    "description": "Изучение продвинутых концепций и библиотек JavaScript.",
                    "type": "Курс",
                    "progress": 80,
                    "groups": ["220298", "210352"],
                    "studentsAssigned": 20,
                    "studentsTotal": 22
                },
                {
                    "id": "10",
                    "name": "DevOps и автоматизация",
                    "description": "Курс по основам DevOps и автоматизации процессов разработки.",
                    "type": "Лекция",
                    "progress": 30,
                    "groups": ["220299", "210353"],
                    "studentsAssigned": 17,
                    "studentsTotal": 22
                }
            ]
        },
        {
            "id": "6",
            "name": "Соколова Юлия Михайловна",
            "email": "yulia.sokolova@example.com",
            "teacherCourses": [
                {
                    "id": "11",
                    "name": "Основы кибербезопасности",
                    "description": "Введение в основы кибербезопасности и защиты данных.",
                    "type": "Курс с тестом",
                    "progress": 65,
                    "groups": ["220300", "210354"],
                    "studentsAssigned": 19,
                    "studentsTotal": 22
                },
                {
                    "id": "12",
                    "name": "Разработка игр на Unity",
                    "description": "Курс по созданию игр с использованием движка Unity.",
                    "type": "Курс",
                    "progress": 95,
                    "groups": ["220301", "210355"],
                    "studentsAssigned": 21,
                    "studentsTotal": 22
                }
            ]
        },
        {
            "id": "7",
            "name": "Васильев Иван Сергеевич",
            "email": "ivan.vasilyev@example.com",
            "teacherCourses": [
                {
                    "id": "13",
                    "name": "Основы сетевых технологий",
                    "description": "Изучение основ сетевых технологий и протоколов.",
                    "type": "Курс",
                    "progress": 75,
                    "groups": ["220302", "210356"],
                    "studentsAssigned": 18,
                    "studentsTotal": 22
                },
                {
                    "id": "14",
                    "name": "Проектирование пользовательских интерфейсов",
                    "description": "Курс по проектированию и разработке пользовательских интерфейсов.",
                    "type": "Лекция",
                    "progress": 40,
                    "groups": ["220303", "210357"],
                    "studentsAssigned": 17,
                    "studentsTotal": 22
                }
            ]
        },
        {
            "id": "8",
            "name": "Попова Мария Александровна",
            "email": "maria.popova@example.com",
            "teacherCourses": [
                {
                    "id": "15",
                    "name": "Основы искусственного интеллекта",
                    "description": "Введение в основы искусственного интеллекта и его применение.",
                    "type": "Курс с тестом",
                    "progress": 85,
                    "groups": ["220304", "210358"],
                    "studentsAssigned": 20,
                    "studentsTotal": 22
                },
                {
                    "id": "16",
                    "name": "Разработка мобильных приложений на Flutter",
                    "description": "Курс по созданию мобильных приложений с использованием Flutter.",
                    "type": "Курс",
                    "progress": 50,
                    "groups": ["220305", "210359"],
                    "studentsAssigned": 19,
                    "studentsTotal": 22
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
        },
        {
            "id": "7",
            "name": "Разработка веб-приложений на Django",
            "description": "Курс по созданию веб-приложений с использованием фреймворка Django.",
            "type": "Курс",
            "teacher": {
                "id": "4",
                "name": "Кузнецова Ольга Петровна",
                "email": "olga.kuznetsova@example.com"
            }
        },
        {
            "id": "8",
            "name": "Основы баз данных",
            "description": "Изучение основ SQL и работы с реляционными базами данных.",
            "type": "Курс с тестом",
            "teacher": {
                "id": "4",
                "name": "Кузнецова Ольга Петровна",
                "email": "olga.kuznetsova@example.com"
            }
        },
        {
            "id": "9",
            "name": "Продвинутый JavaScript",
            "description": "Изучение продвинутых концепций и библиотек JavaScript.",
            "type": "Курс",
            "teacher": {
                "id": "5",
                "name": "Петров Алексей Викторович",
                "email": "alexey.petrov@example.com"
            }
        },
        {
            "id": "10",
            "name": "DevOps и автоматизация",
            "description": "Курс по основам DevOps и автоматизации процессов разработки.",
            "type": "Лекция",
            "teacher": {
                "id": "5",
                "name": "Петров Алексей Викторович",
                "email": "alexey.petrov@example.com"
            }
        }
    ]
}
