import React, { useEffect, useState } from 'react'
import BackButton from 'UI/button/back_button/BackButton';
import classes from './UserProfile.module.css'
import UserProfileNavBtn from 'UI/button/user_profile_nav_button/UserProfileNavBtn';
import ProfilePersonalInformation from './User_Profile_settings_pages/User_Profile_Personal_Information/ProfilePersonalInformation';
import { CookieManager, GET_USER_URL } from 'src/MAIN';
import ProfileLogout from './User_Profile_settings_pages/User_Profile_Logout/ProfileLogout';
import { useNavigate } from 'react-router-dom';
import MainStyleBtn from 'UI/button/main_style_button/MainStyleBtn';
import ProfileOrdersHistory from './User_Profile_settings_pages/User_Profile_Orders_History/ProfileOrdersHistory';


const UserProfile = ({ isLogged, setLogged }) => {
    const navigate = useNavigate()
    const [selectedButton, setSelectedButton] = useState('1')
    const [authorizedUser, setAuthorizedUser] = useState({})

    const getUserInformation = () => {

        fetch(GET_USER_URL + CookieManager.getCookie('userid'))
            .then(response => response.json())
            .then(
                (user) => {

                    let currentUser = {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        phone: user.phone,
                        password: user.password,
                    }

                    setAuthorizedUser(currentUser)
                },
                (error) => {
                    console.log(error)
                }
            )
    }
    useEffect((getUserInformation), [selectedButton]);


    const pageSelector = () => {
        switch (selectedButton) {
            case 1: return <ProfilePersonalInformation user={authorizedUser} />
            case 2: return <ProfileOrdersHistory user={authorizedUser}/>
            case 3: return <ProfileLogout setLogged={setLogged} user={authorizedUser} />
            default: return <ProfilePersonalInformation user={authorizedUser} />
        }
    }

    const toUsersPage = () => {
        navigate('/users-list')
    }

    return (
        <div>
            <BackButton />
            <div className={classes.container}>

                <div className={classes.profile_nav_block}>
                    <div className={classes.profile_nav_title_block}>
                        <h2 className={classes.profile_nav_title}>Управление учётной записью</h2>
                    </div>
                    <div className={classes.profile_nav}>
                        <UserProfileNavBtn selectedButton={selectedButton} setButton={setSelectedButton} btnNumber={1}>Личные данные</UserProfileNavBtn>
                        <UserProfileNavBtn selectedButton={selectedButton} setButton={setSelectedButton} btnNumber={2}>Записи</UserProfileNavBtn>
                        <UserProfileNavBtn selectedButton={selectedButton} setButton={setSelectedButton} btnNumber={3}>Выход с аккаунта</UserProfileNavBtn>

                        <MainStyleBtn styles={{ display: 'flex', marginTop: '100px' }} onClick={toUsersPage}>Просмотр пользователей</MainStyleBtn>
                    </div>
                </div>

                <div className={classes.profile_nav_pages_block}>
                    {pageSelector()}
                </div>
            </div>
        </div>
    )
}

export default UserProfile;