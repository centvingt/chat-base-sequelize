const express = require('express')

const mainController = require('../controllers/mainController')
const authController = require('../controllers/authController')
const adminController = require('../controllers/adminController')

const bodyParser = require('body-parser')

const urlencoderParser = bodyParser.urlencoded({ extended: false })

exports.router = (() => {
    const mainRouter = express.Router()

    mainRouter.route('/').get(mainController.home)

    mainRouter.route('/signup').get(authController.getSignup)
    mainRouter.route('/signin').get(authController.getSignin)
    mainRouter
        .route('/signup')
        .post(urlencoderParser, authController.postSignup)

    mainRouter.route('/admin').get(adminController.backoffice)

    mainRouter.route('*').get(mainController.default)

    return mainRouter
})()
