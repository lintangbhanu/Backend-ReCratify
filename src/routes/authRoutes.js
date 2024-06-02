const { registerUserHandler } = require("../handlers/auth/register");
const { loginUserHandler } = require("../handlers/auth/login");
const { logoutUserHandler } = require("../handlers/auth/logout");
const { forgotPasswordHandler } = require("../handlers/user/forgotPassword");
const { verifyResetCodeHandler } = require("../handlers/user/verifyResetCode");
const { resetPasswordHandler } = require("../handlers/user/resetPassword");

const authRoutes = [
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
        path: '/verifycode',
        handler: verifyResetCodeHandler
    },
    {
        method: 'PUT',
        path: '/resetpassword',
        handler: resetPasswordHandler
    },
    {
        method: 'POST',
        path: '/logout',
        handler: logoutUserHandler
    }
];

module.exports = authRoutes;
