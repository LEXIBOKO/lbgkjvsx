import React from 'react';
import Logo from "../../../assets/logoVertical.svg?react";
import {Button, Input} from "antd";
import {useNavigate as handleRegister} from "react-router-dom";
import './Register.css'


const Register = () => {

    const handleAuth = handleRegister()
    return (
        <div className='registerBox'>
            <Logo/>
            <p className='title'>Регистрация</p>

            <div className='inputBox'>
                <label>
                    EMAIL
                    <Input size={'large'} type='email'/>
                </label>
                <label>
                    ФИО
                    <Input size={'large'}/>
                </label>
                <label>
                    ТЕЛЕФОН
                    <Input size={'large'}/>
                </label>
                <label>
                    НОМЕР ГРУППЫ
                    <Input size={'large'}/>
                </label>
                <label>
                    ПРИДУМАЙТЕ ПАРОЛЬ
                    <Input size={'large'}/>
                </label>
            </div>
            <Button className='button' onClick={() => handleAuth('/mains')}>Зарегистрироваться</Button>
        </div>
    );
};

export default Register;
