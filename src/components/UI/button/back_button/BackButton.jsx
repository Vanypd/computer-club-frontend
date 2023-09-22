import React from "react";
import classes from './BackButton.module.css'
import { useNavigate } from "react-router-dom";

const BackButton = () => {

    const navigate = useNavigate()

    const toMainPage = () => {
        navigate('/')
    }

    return (
        <div className={classes.back_btn}>
            <a onClick={toMainPage} className={classes.back_btn_link}>Назад</a>
        </div>
    )
}

export default BackButton;