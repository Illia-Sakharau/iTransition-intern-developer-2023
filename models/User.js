const {Schema, model} = require('mongoose')


const User = new Schema({
  username: {type: String, required: true},
  position: {type: String},
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  lastLogin: {type: Number, required: true},
  isActive: {type: Boolean, required: true},
})

module.exports = model('User', User)
