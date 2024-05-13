import authService from "./services/authService";
import bookingService from "./services/bookingService";
import usersService from "./services/usersService";

const APIService = {
    users: usersService,
    booking: bookingService,
    auth: authService,
};

export default APIService;