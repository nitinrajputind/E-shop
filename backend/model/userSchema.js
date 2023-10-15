const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: [20, "name is too long"],
        trim: true,
        unique: true,
      },
      email: { type: String, required: true, trim: true, unique: true },
      password: {
        type: String,
        required: true,
        trim: true,
        minlength: [6, "password should be atleast 6 character"],
      },
      confirmpassword: {
        type: String,
        required: true,
        trim: true,
        minlength: [6, "password should be atleast 6 character"],
      },
})

module.exports = mongoose.model('USER', UserSchema)