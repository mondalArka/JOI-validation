const mongoose = require('mongoose')
const Joi = require('joi')

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter a email'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: 8,
    },
})

const Doctor = mongoose.model('doctor', doctorSchema)


const validateDoctor = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(500).required(),
        email: Joi.string().email().min(5).max(500).required(),
        password: Joi.string().min(2).max(10).required(),
    })
    return schema.validate(user)
}


module.exports = {
    Doctor,
    validateDoctor,
}