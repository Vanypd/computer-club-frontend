const CookieManager = {
    getCookie: function (name) {
        let matches = document.cookie.match(new RegExp(`${name}=([^;]*)`));
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

export default CookieManager;