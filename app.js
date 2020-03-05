if (process.env.NODE_ENV === 'development') require('dotenv').config()

//depedencies
const express = require('express')
const cors = require('cors')
const errHandler = require('./middlewares/errHandler')
const app = express()
const routes = require('./routes')

//middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

//routing and errHandler
app.use(routes)
app.use(errHandler)