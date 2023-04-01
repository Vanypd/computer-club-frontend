import React from 'react'
import App from '../../../../../App';
import CreateUsersItems from '../../../../CreateUsersItems';
import UserEditorWindow from '../../../../UI/modals/UserEditorWindow';
import { root } from '../../../../../index';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';

const CreateUsersPage = (props) => {
    const MainPage = () => {
        root.render(
            <App />
        );
    }

    return (
        <div className="App">
            <Header />
            <div className="back_btn">
                <a onClick={MainPage} className="back_btn_link">Назад</a>
            </div>
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