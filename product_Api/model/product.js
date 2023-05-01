const mongoose=require('mongoose');
const schema=mongoose.Schema;
const productschema=new schema({
name:{
    type:String,
    required:true
},
color:[String],
description:{
    type:String,
    required:true
},
size:[String],
image:{
    type:String,
    required:true
}
})
const productmodel=new mongoose.model('product',productschema);
module.exports=productmodel