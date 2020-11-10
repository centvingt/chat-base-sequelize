module.exports = {
    getSignup: (req, res) => {
        res.render('signup.pug')
    },
    postSignup: (req, res) => {
        console.log('POST/signup -> req.body.email:', req.body.email)
        console.log('POST/signup -> req.body.password:', req.body.password)
        res.render('signup.pug')
    },
    getSignin: (req, res) => {
        res.render('signin.pug')
    },
}
