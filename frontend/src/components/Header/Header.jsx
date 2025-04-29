import React from 'react';
import Logo from '../../assets/logoHorizontal.svg?react'
import './Header.css'

const HeaderComponent = ({title}) => {
    return (
        <div className='boxHeader'>
            <Logo />
            <div>
                {title}
            </div>
        </div>
    );
};

export default HeaderComponent;
