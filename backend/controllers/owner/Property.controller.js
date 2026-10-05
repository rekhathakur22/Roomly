const propertyService = require('../../services/owner/Property.service')
const createProperty = async (req,res,next)=>{
  
    try {
        const result = await propertyService.createProperty(req.body);

        res.status(200).json({
            success:true,
            message:'property created succesfully',
            data:result
        })
    }
    catch(err){
        next(err);
    }
     
}

module.exports= {
    createProperty
}