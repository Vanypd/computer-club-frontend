import React from "react";
import MainStyleBtn from "./UI/button/main_style_button/MainStyleBtn";

const CreateUsersItems = (props) => {

    const editUserEvent = () => {        
        props.currentItemParameters.setId(props.item.id);
        props.currentItemParameters.setName(props.item.name);
        props.currentItemParameters.setEmail(props.item.email);
        props.currentItemParameters.setPhone(props.item.phone);
        props.currentItemParameters.setPassword(props.item.password);

        props.editUser(props.item);
    }

    const edit_btn_styles = {
        fontSize: '12px',
        marginBottom: '10px',
    }

    const delete_btn_styles = {
        fontSize: '12px',
    }

    return <div className="user_item flex" userid={props.item.id}>
        <div className="user_item_info flex">
            <div className="item_info_userId"><mark>id: </mark>{props.item.id}</div>
            <div className="item_info_userId"><mark>name: </mark>{props.item.name}</div>
            <div className="item_info_userId"><mark>email: </mark>{props.item.email}</div>
            <div className="item_info_userId"><mark>phone: </mark>{props.item.phone}</div>
            <div className="item_info_userId"><mark>password: </mark>{props.item.password}</div>
        </div>
        <div className="user_item_buttons flex">
            <MainStyleBtn classType={'monochrome'} onClick={editUserEvent} styles={edit_btn_styles}>Редактировать</MainStyleBtn>
            <MainStyleBtn classType={'monochrome-delete'} onClick={() => props.deleteUser(props.item)} styles={delete_btn_styles}>Удалить</MainStyleBtn>
        </div>
    </div>;
}

export default CreateUsersItems;