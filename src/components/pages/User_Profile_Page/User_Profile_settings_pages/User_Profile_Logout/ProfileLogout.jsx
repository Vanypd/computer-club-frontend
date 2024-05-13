import React from 'react'
import classes from './ProfileLogout.module.css'
import MainStyleBtn from '@UI/button/main_style_button/MainStyleBtn';
import { useNavigate } from 'react-router-dom';
import CookieManager from '@src/cookie/CookieManager';

const ProfileLogout = ({ setLogged }) => {

    const navigate = useNavigate()

    const logout = () => {
        CookieManager.logout()
        setLogged(false)
        navigate('/')
    }

    return (
        <div className={classes.profile_nav_pages}>
            <div className={classes.user_logout}>
                <MainStyleBtn onClick={logout} >Выйти из аккаунта</MainStyleBtn>
            </div>
        </div>
    )
}

export default ProfileLogout;