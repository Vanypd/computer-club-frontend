import axios from "axios";
import APIMethods from "../constants/APIMethods";

const usersService = {
    getUsers: async function() {
        let method = APIMethods.users.getAll;
        return axios.get(method);
    },

    getUser: async function(id) {
        let method = APIMethods.users.get;
        return axios.get(method + id);
    },

    deleteUser: async function(id) {
        let method = APIMethods.users.delete;
        return axios.delete(method + id);
    },

    putUser: async function(id, data) {
        let method = APIMethods.users.put;
        return axios.put(method + id, data);
    },

    addUser: async function(data) {
        let method = APIMethods.users.add;
        return axios.post(method, data);
    }
};

export default usersService;
