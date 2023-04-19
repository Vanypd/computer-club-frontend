import React, { useState } from 'react';
import { root } from '../../..';
import MainStyleBtn from '../../UI/button/main_style_button/MainStyleBtn';
import Footer from '../Footer/Footer';
import AutorisationPage from '../Main/Main_Pages/Authorization_Page/AuthorizationPage';
import RegistrationPage from '../Main/Main_Pages/Registration_Page/RegistrarionPage';
import UserProfile from '../Main/Main_Pages/User_Profile_Page/UserProfile';
import classes from './Header.module.css';
import HeaderLogo from './Header_Logo/HeaderLogo';

const Header = () => {
    const toRegistrationPage = () => {
        root.render(
            <div className="App">
                <Header />
                <RegistrationPage />
            </div>
        )
    }

    const toAuthorizationPage = () => {
        root.render(
            <div className="App">
                <Header />
                <AutorisationPage />
            </div>
        )
    }

    const toUserProfilePage = () => {
        root.render(
            <div className="App">
                <Header />
                <UserProfile/>
            </div>
        )
    }

    return (
        <header className={classes.header}>
            <div className={classes.header_conteiner}>
                <HeaderLogo />
                <div className="authentication flex">
                    <MainStyleBtn
                        onClick={toUserProfilePage}
                        styles={{ height: '100%', padding: '0 10px', minWidth: '100px', border: 'none', borderRadius: '0', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                        Личный кабинет
                    </MainStyleBtn>
                    <MainStyleBtn
                        onClick={toAuthorizationPage}
                        styles={{ height: '100%', padding: '0 10px', minWidth: '100px', border: 'none', borderRadius: '0', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                        Вход
                    </MainStyleBtn>
                    <MainStyleBtn
                        onClick={toRegistrationPage}
                        styles={{ height: '100%', padding: '0 10px', minWidth: '100px', border: 'none', borderRadius: '0' }}>
                        Регистрация
                    </MainStyleBtn>
                </div>
            </div>
        </header>
    )
};

export default Header;