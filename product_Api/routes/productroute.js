const express=require('express');
const Route=express.Router();
const controller=require('../controller/ApiProductController');

Route.post('/addproduct',controller.addproduct)
Route.get('/getproduct',controller.getproduct)



module.exports=Route