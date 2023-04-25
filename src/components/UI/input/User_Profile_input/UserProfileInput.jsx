import React from 'react'
import classes from './UserProfileInput.module.css'

const UserProfileInput = ({children, ...props}) => {
  return (
    <input
    className={classes.userProfileInput}
    type={props.type}
    name={props.name}
    onChange={() => console.log(document.cookie)}
    defaultValue={children}></input>
  )
}

export default UserProfileInput