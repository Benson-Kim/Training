const express = require('express');

const userRoutes = require('./routes/userRoutes')
const homeRoutes = require('./routes/homeRoutes')
const {logger} = require('./middlewares/logger')

const app = express();
const port = 4000;
// middleware, always before the logic
app.use(logger)

app.use('/',homeRoutes)
app.use('/users',userRoutes)

app.listen(port, () => console.log(`Server running at port ${port}`))