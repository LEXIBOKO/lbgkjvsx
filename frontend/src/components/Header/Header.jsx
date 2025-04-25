import React from 'react';
import Logo from '../../assets/logoHorizontal.svg?react'
import './Header.css'

const Header = ({title}) => {
    return (
        <div className='boxHeader'>
            <Logo />
            <div>
                {title}
            </div>
        </div>
    );
};

export default Header;
