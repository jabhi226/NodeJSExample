const fs = require('fs')

const express = require('express')
const app = express()
const userRouter = require('../routes/usersroutes')

app.use(express.urlencoded({ extended: true }))

//normal api which redirects to a file
app.get('/', (req, res) => {
    fs.readFile('./test_basic_example/index.html', (err, html) => {
        if (err == null && html != null) {
            res.status(200).end(html)
        } else {
            console.log(err)
            res.status(500).end("fail")
        }
    })
})

//use user route
app.use('/users', userRouter)

//start server on port 3000
app.listen(3000)