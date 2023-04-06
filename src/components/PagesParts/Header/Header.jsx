import React, { useState } from 'react';
import { root } from '../../..';
import Footer from '../Footer/Footer';
import RegistrationPage from '../Main/Main_Pages/Registration_Page/RegistrarionPage';
import classes from './Header.module.css';
import HeaderLogo from './Header_Logo/HeaderLogo';

const Header = () => {
    const toRegistrationPage = () => {
        root.render(
            <div className="App">
            <Header />
            <RegistrationPage/>
            <Footer />
          </div>
        )
    }

    return (
        <header className={classes.header}>
            <div className={classes.header_conteiner}>
                <HeaderLogo />
                <div className="authentication flex">
                    <a href="login.html" className="home_page_link header_link flex">
                        <span>Вход</span>
                    </a>
                    <a onClick={toRegistrationPage} className="home_page_link header_link flex">
                        <span>Регистрация</span>
                    </a>
                </div>
            </div>
        </header>
    )
};

export default Header;