import axios from "axios";
import APIMethods from "../constants/APIMethods";
import CookieManager from "@src/cookie/CookieManager";

const bookingService = {
    getOrder: async function (date) {
        let method = APIMethods.booking.getOrder;
        return axios.get(method, date);
    },

    postOrder: async function (data) {
        let method = APIMethods.booking.postOrder;
        let config = {
            headers: {
                'Authorization': 'Bearer ' + CookieManager.getCookie('token')
            }
        }
        return axios.post(method, data, config);
    },

    getPlaces: async function () {
        let method = APIMethods.booking.getPlaces;
        return axios.get(method);
    },

    getUserOrderlist: async function (userId) {
        let method = APIMethods.booking.getUserOrderlist;
        return axios.get(method, userId);
    }
};

export default bookingService;