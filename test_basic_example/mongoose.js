const mongoose = require('mongoose')
const User = require('./models/user')

mongoose.connect("mongodb://localhost/testdb")
console.log(`${mongoose.Collection.dbName} | ${mongoose.Collection.name}`)

// run()
// async function run() {
// const user = new User({ id: 103, name: 'Test', age: 10 })
// user.save().then(() => console.log(`User saved with id: ${user.id} and name: ${user.name}.`))
// }

