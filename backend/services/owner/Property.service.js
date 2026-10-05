const {getDb} = require('../../config/db');

const createProperty = async (propertyData) =>{
   const db = getDb();

   const propertyCollection = db.collection("properties");

   const result = await propertyCollection.insertOne(propertyData);

   return result;
}

module.exports = {
    createProperty
}