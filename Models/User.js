const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    HasAdminAccess: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true
    },
    role: {
       type: String,
       enum: ['superadmin', 'storekeeper', 'salesperson', 'user',], //Define the allowed roles
       default: 'user'
    },

    }, 
    { 
        timestamps: true  //Date created and updated at);
});

//create model from schema
const User = mongoose.model('User', UserSchema);

module.exports = User; // export the model to be used in other files