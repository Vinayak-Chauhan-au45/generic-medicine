const express = require('express')
const {getSignup, getLogin, signUpController, loginController, logoutController } = require('../controllers/auth')

const authRouter = express.Router()
authRouter.get("/signup", getSignup);
authRouter.get("/login", getLogin);

authRouter.post('/signup', signUpController)
authRouter.post('/login', loginController)
authRouter.post('/logout', logoutController)



module.exports = authRouter