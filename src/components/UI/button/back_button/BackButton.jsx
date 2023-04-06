import React from "react";
import { root } from "../../../..";
import App from "../../../../App";
import classes from './BackButton.module.css'

const BackButton = () => {
    const toMainPage = () => {
        root.render(
            <App />
        );
    }

    return (
        <div className={classes.back_btn}>
            <a onClick={toMainPage} className={classes.back_btn_link}>Назад</a>
        </div>
    )
}

export default BackButton;