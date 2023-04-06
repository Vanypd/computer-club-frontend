import React from 'react'
import CreateUsersItems from '../../../../CreateUsersItems';
import UserEditorWindow from '../../../../UI/modals/UserEditorWindow';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import BackButton from '../../../../UI/button/back_button/BackButton';

const CreateUsersPage = (props) => {

    return (
        <div className="App">
            <Header /> 
            <BackButton/>
            <main className="main">
                <UserEditorWindow
                    active={props.editorWindowActive}
                    setActive={props.setEditorWindowActive}
                    currentItem={props.currentItem}
                    GetUsers={props.GetUsers}
                    currentItemParameters={props.currentItemParameters}
                />
                <div className="container home_page_container">
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
            <Footer/>
        </div>
    )
}

export default CreateUsersPage;