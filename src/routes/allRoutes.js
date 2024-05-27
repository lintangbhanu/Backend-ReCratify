const { registerUserHandler, loginUserHandler, forgotPasswordHandler,resetPasswordHandler } = require("../handlers/userHandlers");

const routes = [
    {
        method: 'POST',
        path: '/register',
        handler: registerUserHandler
    },

    {
        method: 'POST',
        path: '/login',
        handler: loginUserHandler
    },

    {
        method: 'POST',
        path: '/forgotpassword',
        handler: forgotPasswordHandler
    },

    {
        method: 'POST',
        path: '/resetpassword',
        handler: resetPasswordHandler
    }
];

module.exports = routes;