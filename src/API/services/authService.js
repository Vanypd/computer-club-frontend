import axios from "axios";
import APIMethods from "../constants/APIMethods";

const authService = {
    login: async function(data) {
        return axios.post(APIMethods.auth.post, data);
    }
};

export default authService;
