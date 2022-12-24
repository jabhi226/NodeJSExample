const express = require('express')
const userRouter = express.Router()
const User = require('../collections/user')

//route: http://localhost:3000/users/

//get api
userRouter.get('/', async (req, res) => {
    try {
        const users = await User.find()
        console.log(users)
        res.json(users)
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: e.message })
    }
})

//post api
userRouter.post('/', async (req, res) => {
    console.log('body', req.body)
    const newUser = new User({
        id: 101,
        name: req.body.name,
        age: 19,
        hobby: '',
        query: ['Do', 'Dont']
    })
    try {
        const savedUser = await newUser.save()
        res.json(savedUser)
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: e.message })
    }
})

userRouter.delete("/", async (req, res) => {
    try {
        console.log('body', req.body)
        var deletedUser = await User.find({ name: req.body.username })
        console.log('delete', deletedUser)
        var op = deletedUser.remove().exec()
        console.log('op', op)
        res.json(deletedUser)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})

// //get api wiht dynamic parameters
// userRouter.get("/:userId", (req, res) => {
//     console.log(req.params)
//     var file = { user: 'Abhishek', id: `${req.params.userId}`, type: 'GET' }
//     res.json(file)
// })


module.exports = userRouter