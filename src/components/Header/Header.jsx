import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainStyleBtn from '@UI/button/main_style_button/MainStyleBtn';
import classes from './Header.module.css';
import HeaderLogo from './Header_Logo/HeaderLogo';


const Header = ({ isLogged }) => {

    const navigate = useNavigate()

    const toRegistrationPage = () => {
        navigate('/reg')
    }

    const toAuthorisationPage = () => {
        navigate('/auth')
    }

    const toUserProfilePage = () => {
        navigate('/profile')
    }

    return (
        <header className={classes.header}>
            <div className={classes.header_conteiner}>
                <HeaderLogo />

                {(isLogged === true)
                    ? (
                        <div className="authentication flex">
                            <MainStyleBtn
                                onClick={toUserProfilePage}
                                styles={{ height: '100%', padding: '0 10px', minWidth: '100px', border: 'none', borderRadius: '0', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                                Личный кабинет
                            </MainStyleBtn>
                        </div>
                    )
                    : (
                        <div className="authentication flex">
                            <MainStyleBtn
                                onClick={toAuthorisationPage}
                                styles={{ height: '100%', padding: '0 10px', minWidth: '100px', border: 'none', borderRadius: '0', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                                Вход
                            </MainStyleBtn>
                            <MainStyleBtn
                                onClick={toRegistrationPage}
                                styles={{ height: '100%', padding: '0 10px', minWidth: '100px', border: 'none', borderRadius: '0' }}>
                                Регистрация
                            </MainStyleBtn>
                        </div>
                    )
                }
            </div>
        </header>
    )
};

export default Header;