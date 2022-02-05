import React from 'react';
import header from '../../images/header-image-for-sp.jpg';
import './Header.css';


const Header = () => {
    return (
        <div className='header-container'>
            <img src={header} alt="header" />
            <h1 className='header-name'> Smilling Product</h1>
        </div>
    );
};

export default Header;<h1>This is header </h1>