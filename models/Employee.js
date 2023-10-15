const mongoose = require("mongoose");

var employeeSchema = new mongoose.Schema({
    first_name: {
        type: String, 
        required: true,
        maxLength: 100
    },
    last_name: {
        type: String,
        required: true,
        maxLength: 50
    },
    email: {
        type: String, 
        unique: true,
        maxLength: 50
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    salary: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('employee', employeeSchema)