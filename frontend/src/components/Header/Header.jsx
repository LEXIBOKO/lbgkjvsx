import React from 'react';
import Logo from '../../assets/logoHorizontal.svg?react'
import './Header.css'
import {Navigate, useNavigate} from "react-router-dom";

const HeaderComponent = ({title}) => {
    const navigate = useNavigate();
    return (
        <div className='boxHeader'>
            <Logo style={{cursor: 'pointer'}} onClick={() => navigate('/')} />
            <div>
                {title}
            </div>
        </div>
    );
};

export default HeaderComponent;
