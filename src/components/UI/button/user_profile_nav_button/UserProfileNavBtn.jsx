import React from 'react'
import classes from './UserProfileNavBtn.module.css'

const UserProfileNavBtn = ({selectedButton, setButton, btnNumber, isActive, children, ...props }) => {

    const classSetter = () => {
        if (selectedButton == btnNumber) {
            return ([classes.profile_nav_button, classes.active].join(' '))
        } else {
            return classes.profile_nav_button
        }
    }

    return (
        <button className={classSetter()} onClick={() => setButton(btnNumber)}>
            {children}
        </button>
    )
}

export default UserProfileNavBtn;