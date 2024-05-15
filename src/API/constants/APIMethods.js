const BASE_URL = 'http://localhost:8080';
const resolveURL = (path) => BASE_URL + path;

const APIMethods = {
    users: {
        getAll: resolveURL('/api/users/list'),
        get: resolveURL('/api/users/'),
        delete: resolveURL('/api/users/'),
        put: resolveURL('/api/users/'),
        add: resolveURL('/api/users/add'),
    },

    booking: {
        getOrder: resolveURL('/api/order/orderslistbydate/'),
        postOrder: resolveURL('/api/order/add-order'),
        getPlaces: resolveURL('/api/order/orderslistbydate/'),
        getUserOrderlist: resolveURL('/api/order/orderslistbyuserid/'),
    },

    auth: {
        post: resolveURL('/api/user/auth'),
    }
}

export default APIMethods;