const Doctor = require('../model/Doctro')

const doctor = async (req, res,next) => {
    
    try {
        const Dct = await new Doctor({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,  
        })
        console.log(emp);
        const Dct_aa = await Dct.save();
        res.status(200).send({ success: true, msg: "add data", data: Dct_aa })
    } catch (error) {
        //res.status(201).json({ error })
        return res.status(400).send(error.details[0].message)
    }

}

module.exports={doctor}