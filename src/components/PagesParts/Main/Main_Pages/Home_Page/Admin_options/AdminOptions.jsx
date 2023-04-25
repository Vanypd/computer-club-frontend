import React from "react";
import classes from './AdminOptions.module.css'
import MainStyleBtn from "../../../../../UI/button/main_style_button/MainStyleBtn";
import { useNavigate } from "react-router-dom";

const AdminOptions = () => {

    const navigate = useNavigate()

    const toUsersPage = () => {
        navigate('/users-list')
    }

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.admin_main_div}>
                    <MainStyleBtn onClick={toUsersPage}>Просмотр пользователей</MainStyleBtn>
                </div>
            </div>
        </section>


    )

}

export default AdminOptions;