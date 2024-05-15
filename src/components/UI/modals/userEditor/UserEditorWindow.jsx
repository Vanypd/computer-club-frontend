import React from 'react'
import classes from './UserEditorWindow.module.css'
import MainStyleBtn from '../../button/main_style_button/MainStyleBtn'
import APIService from '@src/API/APIService'

const UserEditorWindow = ({ currentItemParameters, active, setActive, currentItem, GetUsers }) => {

    const confirmUpdate = async () => {

        const user = {
            id: currentItemParameters.id,
            name: currentItemParameters.name,
            email: currentItemParameters.email,
            phone: currentItemParameters.phone,
            password: currentItemParameters.password
        }

        if (JSON.stringify(currentItem) !== JSON.stringify(user)) {
            APIService.users.putUser(currentItem.id, user)
            GetUsers();
            setActive(false);
        } else {
            console.log('равны');
            setActive(false);
        }
    }

    return (
        <div className={
            active ? ([classes.editor_window, classes.editor_window_active].join(' ')) : (classes.editor_window)
        }>
            <div className={
                active ? ([classes.editor_window_content, classes.editor_window_content_active].join(' ')) : (classes.editor_window_content)
            }>
                <a href="/#" className="editor_window_close" tabIndex="1" onClick={() => setActive(false)}>
                    <svg width="25px" height="25px" viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" />
                    </svg></a>
                <h2 className="editor_window_title">Редактирование</h2>
                <div className="editor_window_place_div">
                    <div>
                        <span className="editor_window_label">id</span>
                        <input
                            type="text"
                            id="id"
                            value={currentItemParameters.id}
                            className={classes.form_place_non_active}
                            readOnly
                        ></input>
                    </div>
                    <div>
                        <span className="editor_window_label">name</span>
                        <input
                            type="text"
                            id="name"
                            value={currentItemParameters.name}
                            onChange={e => currentItemParameters.setName(e.target.value)}
                            className={classes.form_place}
                        ></input>
                    </div>
                    <div>
                        <span className="editor_window_label">email</span>
                        <input
                            type="text"
                            id="email"
                            value={currentItemParameters.email}
                            onChange={e => currentItemParameters.setEmail(e.target.value)}
                            className={classes.form_place}
                        ></input>
                    </div>
                    <div>
                        <span className="editor_window_label">phone</span>
                        <input
                            type="text"
                            id="phone"
                            value={currentItemParameters.phone}
                            onChange={e => currentItemParameters.setPhone(e.target.value)}
                            className={classes.form_place}
                        ></input>
                    </div>
                    <div>
                        <span className="editor_window_label">password</span>
                        <input
                            type="text"
                            id="password"
                            value={currentItemParameters.password}
                            onChange={e => currentItemParameters.setPassword(e.target.value)}
                            className={classes.form_place}
                        ></input>
                    </div>
                </div>
                <MainStyleBtn onClick={confirmUpdate}>Принять</MainStyleBtn>
            </div>
        </div>
    )
}

export default UserEditorWindow;

