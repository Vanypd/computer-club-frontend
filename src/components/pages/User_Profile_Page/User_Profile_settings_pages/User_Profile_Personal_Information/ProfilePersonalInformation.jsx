import React from 'react'
import classes from './ProfilePersonalInformation.module.css'
import UserProfileInput from 'UI/input/User_Profile_input/UserProfileInput';

const ProfilePersonalInformation = ({user, ...props}) => {
    return (
        <div className={classes.profile_nav_pages}>
            <div className={classes.user_info}>
                <div className={classes.id_block}>
                    <div className={classes.user_info_id}>
                        <span className={classes.user_info_id_text}>Ваш id:</span>
                        <span className={classes.user_info_id_value}>{user.id}</span>
                    </div>

                </div>

                <div className={classes.name_block}>
                    <span className={classes.user_info_span}>Имя</span>
                    <UserProfileInput type={'text'} name={'name'}>{user.name}</UserProfileInput>
                </div>

                <div className={classes.email_block}>
                    <span className={classes.user_info_span}>E-mail</span>
                    <UserProfileInput type={'text'} name={'name'}>{user.email}</UserProfileInput>
                </div>

                <div className={classes.phone_block}>
                    <span className={classes.user_info_span}>Телефон</span>
                    <UserProfileInput type={'text'} name={'name'}>{user.phone}</UserProfileInput>
                </div>

                <div className={classes.password_block}>
                    <span className={classes.user_info_span}>Пароль</span>
                    <UserProfileInput type={'text'} name={'name'}>{user.password}</UserProfileInput>
                </div>
            </div>
        </div>
    )
}

export default ProfilePersonalInformation;