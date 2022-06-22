require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { router } = require('./routes/routes.js')

const app = express()
app.use(cors())
const port = process.env.PORT

app.use('/', router)

app.listen(port, () => console.log(`server running: ${port}`))