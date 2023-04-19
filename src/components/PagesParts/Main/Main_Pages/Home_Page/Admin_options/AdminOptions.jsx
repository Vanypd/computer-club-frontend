import React from "react";
import Users from '../../../../../../users';
import { root } from '../../../../../../';
import classes from './AdminOptions.module.css'
import MainStyleBtn from "../../../../../UI/button/main_style_button/MainStyleBtn";

const AdminOptions = () => {
    const UsersPage = () => {
        root.render(
            <Users />
        )
    }

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.admin_main_div}>
                    <MainStyleBtn onClick={UsersPage}>Просмотр пользователей</MainStyleBtn>
                </div>
            </div>
        </section>


    )

}

export default AdminOptions;