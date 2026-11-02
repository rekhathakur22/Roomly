const {getDb} = require('../../config/db');
const defaultProperties = async (req,res)=>{
 try{
    const data = await  getDb().collection('properties').find({
        city:{
            $regex:'^indore$',
            $options:'i'
        }
    }).limit(6).toArray();
   if(data.length===0){
    return res.status(200).json({
        success:true,
        message:"no matching record found",
        data:[]
    })
}
 res.json(data);
 }
 catch(error){
 res.status(500).json({ success: false, error: error.message });
 }

}

module.exports = defaultProperties;