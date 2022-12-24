const fs = require('fs')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//this is used to get req.body preperly
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    fs.readFile('./test_basic_example/index.html', (err, html) => {
        res.end(html)
    })
})

mongoose.connect('mongodb://0.0.0.0:27017/testdb')
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected To DB"))

const userRouter = require('./routes/usersroutes')
app.use('/users', userRouter)

app.listen(3000, () => console.log("Server Started."))