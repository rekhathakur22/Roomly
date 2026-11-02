
const { getDb} = require('../../config/db');
const searchProperty = async (req,res)=>{
try
{
 const {location,propertyType,budget,moveInDate} = req.query;
 const queryobj = {};

 // if location is empty
 if(!location || !location.trim()){
    return res.status(400).json({
        success:false,
        message:'Location is a required field and cannot be empty.'
    })
 } else{
    queryobj.city ={$regex:`^${location.trim()}`,$options:'i'};
 }

 // propertyType
 if(propertyType && propertyType.trim()){
    queryobj.propertyType = {$regex:`^${propertyType.trim()}`,$options:'i'};
 }

 // budget
 if(budget){
    queryobj.monthlyRent = {
        $lte: String(Number(budget)+3000)
    };
 }

 // move in date 
 if(moveInDate){
    queryobj.availableFrom = {
        $lte:moveInDate
    };
 }
// send request to the database
  const result = await  getDb().collection('properties').find(queryobj).toArray();

// if there is no record for the query send reponse of no data found
if(result.length===0){
    return res.status(200).json({
        success:true,
        message:"no matching record found",
        data:[]
    })
}
 res.json(result);
} catch(error){
 res.status(500).json({ success: false, error: error.message });
}
}

module.exports = searchProperty;