import React from 'react'
import CreateUsersItems from './CreateUsersItems';
import BackButton from '@UI/button/back_button/BackButton';
import classes from './UsersPage.module.css'
import UserEditorWindow from '../../UI/modals/userEditor/UserEditorWindow';

const CreateUsersPage = (props) => {
    return (
        <div className="App">
            <BackButton/>
            <main className={classes.main}>
                <UserEditorWindow
                    active={props.editorWindowActive}
                    setActive={props.setEditorWindowActive}
                    currentItem={props.currentItem}
                    GetUsers={props.GetUsers}
                    currentItemParameters={props.currentItemParameters}
                />
                <div className={classes.container}>
                    {props.userItems.map(item =>
                        <CreateUsersItems
                            editUser={props.editUser}
                            deleteUser={props.deleteUser}
                            item={item}
                            key={item.id}
                            currentItemParameters={props.currentItemParameters}

                        />)}
                </div>
            </main>
        </div>
    )
}

export default CreateUsersPage;