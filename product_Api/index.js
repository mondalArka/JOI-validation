const express=require('express');
const mongoose=require('mongoose');
const Body_Parser=require('body-parser');
const multer=require('multer');
const path=require('path')

const app=express();

app.use(express.urlencoded({extended:true}));
app.use(Body_Parser.urlencoded({extended:true}));

app.use(Body_Parser.json());


//steap-1...static file uplode...
app.use('/upload',express.static(path.join(__dirname,'upload')));

//steap-2..
const filestorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'upload')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

//steap-3.. type of file....
const filefilter=(req,file,cb)=>{
    if(file.mimetype.includes("png")||
    file.mimetype.includes("jpg")||
    file.mimetype.includes("jpeg")){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}

// steap-4.... file upload.
app.use(multer({storage:filestorage,fileFilter:filefilter,limits:{fieldSize:1024*1024*5}}).single('image'))


const productroute=require('./routes/productroute');
app.use(productroute)

const joiRoute=require('./routes/JoiRoute')
app.use(joiRoute)

const port=4127;
const Dbcon="mongodb+srv://nodeClassjan:BrnrXRpwEfvb35kG@cluster0.4axmojt.mongodb.net/Api_Curd-Project";
mongoose.connect(Dbcon,({useNewUrlParser:true,useUnifiedTopology:true}))
.then(result=>{
    app.listen(port,()=>{
        console.log(`sever running http://localhost:${port}`);
        console.log(`databace connected`);
    })
}).catch(err=>{
    console.log(err);
})
