const express=require('express')
const route=express.Router()
const doctorController=require('../controller/DoctorController')
const validateMiddleware=require('../middleware/joi')
const {validateDoctor}=require('../model/Doctro')

const body_parser = require('body-parser')
route.use(body_parser.json());
route.use(body_parser.urlencoded({ extended: true }));



route.post('/adddoctor',[validateMiddleware(validateDoctor)],doctorController.doctor);


module.exports=route