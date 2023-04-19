import React, { useEffect } from 'react'
import BackButton from '../../../../UI/button/back_button/BackButton';
import classes from './UserProfile.module.css'

const UserProfile = () => {

    return (
        <div>
            <BackButton />
            <div className={classes.container}>

                <div className={classes.profile_nav}>

                </div>

                <div className={classes.profile_nav_page}>

                </div>
            </div>
        </div>
    )
}

export default UserProfile;