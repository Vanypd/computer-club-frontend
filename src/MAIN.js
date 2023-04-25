// ENDPOINTS //
export const MAIN_URL = 'http://safg13.ddns.net:8080';
export const TEST_URL = 'https://jsonplaceholder.typicode.com/posts';

// USERS //

export const GET_USERS_URL = MAIN_URL + '/user/list';
export const GET_USER_URL = MAIN_URL + '/user/';
export const DELETE_USERS_URL = MAIN_URL + '/user/';
export const PUT_USERS_URL = MAIN_URL + '/user/';
export const POST_USERS_URL = MAIN_URL + '/user/add';

// BOOKING //

export const POST_BOOKING_ORDER_URL = MAIN_URL + '/order/add-order'
export const GET_BOOKING_ORDER_URL = MAIN_URL + '/order/orderslist/'

// AUTH //

export const POST_AUTH_URL = MAIN_URL + '/user/auth';



// COOCKIES //


export const CookieManager = {
    getCookie: function (name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : '';
    },

    logIn: function (token, userid) {
        let maxAgeValue = 3600

        document.cookie = `token=${token}; max-age=${maxAgeValue}`
        document.cookie = `userid=${userid}; max-age=${maxAgeValue}`
    },

    logout: function () {
        document.cookie = `userid=deleted; max-age=0`
        document.cookie = `token=deleted; max-age=0`
    },
}
















////////////////////////////////////////////////////////////////////////////
//  import Gallery from './Gallery.js';     // КОГДА ЭКСПОРТИРУЕТСЯ DEFAULT
//  import { Profile } from './Gallery.js'; // КОГДА ЭКСПОРТИРУЕТСЯ CONST
////////////////////////////////////////////////////////////////////////////