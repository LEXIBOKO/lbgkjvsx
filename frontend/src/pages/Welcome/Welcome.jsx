import Logo from '../../assets/logoVertical.svg?react'
import './Welcome.css'
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

const Welcome = () => {
    const  navigateTo = useNavigate();
    return (
        <div className='boxWelcome'>
            <Logo />
            <p className='title'>Добро пожаловать!</p>
            <Button className='button' onClick={() => navigateTo('/login')}>Войти в личный кабинет</Button>
            <Button className='button' onClick={() => navigateTo('/register')}>Загеристрироваться</Button>
        </div>
    );
};

export default Welcome;
