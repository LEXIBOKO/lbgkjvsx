import React from 'react';
import Logo from "../../../assets/logoVertical.svg?react";
import {Button, Input} from "antd";
import './Login.css'
import {useNavigate as handleLogin} from "react-router-dom";


const Login = () => {
    const handleAuth = handleLogin();
    return (
        <div className='box'>
            <Logo/>
            <p className='title'>Вход</p>

            <div className='inputBox'>
                <label>
                    EMAIL
                    <Input size={'large'} type='email' />
                </label>
                <label>
                    ПАРОЛЬ
                    <Input size={'large'}/>
                </label>
            </div>
            <Button className='button' onClick={() => handleAuth('/maint')}>Войти в личный кабинет</Button>

        </div>
    );
};

export default Login;
