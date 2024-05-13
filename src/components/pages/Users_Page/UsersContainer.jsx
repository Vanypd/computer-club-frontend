import APIService from "@API/APIService";
import UsersPage from "pages/Users_Page/UsersPage.jsx";
import { useEffect, useState } from "react";

function UsersContainer() {
    const [error, setError] = useState('');
    const [isLoaded, setLoaded] = useState(false);

    const [userItems, setUserItems] = useState([]);
    const [isEditorWindowActive, setEditorWindowActive] = useState(false);
    const [currentItem, setCurrentItem] = useState({});

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    
    const currentItemParameters = {
        id: id,
        name: name,
        email: email,
        phone: phone,
        password: password,
        setId: setId,
        setName: setName,
        setEmail: setEmail,
        setPhone: setPhone,
        setPassword: setPassword,
    };

    const GetUsers = () => {
        APIService.users.getUsers()
        .then((result) => setUserItems(result.data))
        .catch((error) => setError(error))
        .finally(() => setLoaded(true))
    };
    
    useEffect(() => {
        setError('');
        setLoaded('');
        GetUsers();
    }, [error]);

    const deleteUser = (item) => {
        APIService.users.deleteUser(item.id)
        setUserItems(userItems.filter(i => i.id !== item.id))
    };

    const editUser = (item) => {
        setEditorWindowActive(true);
        setCurrentItem(item);
    };

    return (
        <UsersPage
            editUser={editUser}
            deleteUser={deleteUser}
            userItems={userItems}
            editorWindowActive={isEditorWindowActive}
            setEditorWindowActive={setEditorWindowActive}
            currentItem={currentItem}
            GetUsers={GetUsers}
            currentItemParameters={currentItemParameters}
        />
    );
};

export default UsersContainer;