import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import '../Logo/Logo.css'

export default function Logo() {
    return (
        <div className = "Logo">
            <img src={burgerLogo} alt="MyBurger"/>
        </div>
    )
}
