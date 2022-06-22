const express = require('express')

const app = express()
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello coders, it is  with nodeman, yet again')
})

app.listen(port,()=>console.log(`server running at port ${port}`))