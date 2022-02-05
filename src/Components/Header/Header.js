import React from 'react';
import header from '../../images/header-image-for-sp.jpg';
import './Header.css';


const Header = () => {
    return (
        <div className='header-container'>
            {/* header image and name  */}
            <div className="header-image-container">
                 <img src={header} alt="header" />
                 <h1 className='header-name'> Smilling Product</h1>    
            </div>

            {/* Nav bar  */}
            <div className="header-nav-bar">
                <nav>
                    <div><a href="#">Shop</a></div>
                    <div><a href="#">Order Review</a></div>
                    <div><a href="#">Manage</a></div>
                </nav>
            </div>

            
        </div>
    );
};

export default Header;<h1>This is header </h1>