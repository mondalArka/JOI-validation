const product = require('../model/product')
const path=require('path')

const addproduct = async (req, res) => {
    try {
        const { name } = req.body
        const checkname = await product.findOne({ name })
        if (checkname) {
            return res.status(404).json({ success: false, msg: "name already exists" })
        }
        const image=req.file
        const pdt = await new product({
            
            name: req.body.name,
            color: req.body.color,
            description: req.body.description,
            size: req.body.size,
            image:image.path
        })
        const Result = await pdt.save();
        res.status(201).json({ success: true, msg: "product added successfully", data: Result })
    }
    catch (err) {
        console.log(err);
        res.status(404).json({ success: false, msg: "NOT Found" })
    }
}


const getproduct = async (req, res) => {
    try {
        const alldata = await product.find();
        res.status(200).json({ success: true, msg: "fatch all product data successfully", data: alldata })
    }
    catch (err) {
        res.status(404).json({ success: false, msg: "NOT Found" })
    }
}


module.exports = {
    addproduct,
    getproduct
}