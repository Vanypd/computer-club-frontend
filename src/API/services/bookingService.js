import axios from "axios";
import APIMethods from "../constants/APIMethods";

const bookingService = {
    getOrder: async function(date) {
        let method = APIMethods.booking.getOrder;
        return axios.get(method, date);
    },

    postOrder: async function(data) {
        let method = APIMethods.booking.postOrder;
        return axios.post(method, data);
    },

    getPlaces: async function() {
        let method = APIMethods.booking.getPlaces;
        return axios.get(method);
    },

    getUserOrderlist: async function() {
        let method = APIMethods.booking.getUserOrderlist;
        return axios.get(method);
    }
};

export default bookingService;