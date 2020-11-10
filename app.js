const express = require('express')
const helmet = require('helmet')

const mainRouter = require('./routers/mainRouter').router

const app = express()
app.use(helmet())
app.use(express.static('public'))

app.set('view engine', './views')

const port = 3000

app.use('/', mainRouter)

app.listen(port, () =>
    console.log(`le serveur express est lancé sur le port ${port}`)
)
