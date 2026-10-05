const {MongoClient} = require('mongodb')

const client = new MongoClient(process.env.MONGO_URI);

let db;
const connectDb = async () =>{
     try{
       await client.connect();
       console.log("database connection successfull");

        db = client.db(process.env.DB_NAME);

        return db;

     }
     

    
    catch(e) {
      console.error("MongoDB connection failed:", e.message);
      throw e;
    }

  }
const getDb = ()=>{
    
       if (!db) {
     throw new Error("Database is not connected");
     }

      return db;
    
}

module.exports = {
    connectDb,
    getDb
}