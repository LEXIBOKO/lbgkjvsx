import Logo from '../../assets/logoVertical.svg?react'
import './Welcome.css'
import {Button} from "antd";
const Welcome = () => {
    return (
        <div className='box'>
            <Logo />
            <p className='title'>Добро пожаловать!</p>
            <Button className='button'>Войти в личный кабинет</Button>

        </div>
    );
};

export default Welcome;
