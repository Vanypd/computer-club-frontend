const BASE_URL = 'http://safg13.ddns.net:8080';
const resolveURL = (path) => BASE_URL + path;

const APIMethods = {
    users: {
        getAll: resolveURL('/user/list'),
        get: resolveURL('/user/'),
        delete: resolveURL('/user/'),
        put: resolveURL('/user/'),
        add: resolveURL('/user/add'),
    },

    booking: {
        getOrder: resolveURL('/order/orderslistbydate/'),
        postOrder: resolveURL('/order/add-order'),
        getPlaces: resolveURL('/order/orderslistbydate/'),
        getUserOrderlist: resolveURL('/order/orderslistbyuserid/'),
    },

    auth: {
        post: resolveURL('/user/auth'),
    }
}

export default APIMethods;