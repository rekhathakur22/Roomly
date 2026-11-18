const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

let db;

const connectDb = async () => {
  try {
    await client.connect();

    console.log("Database connection successful");

    db = client.db(process.env.DB_NAME);

    console.log("Connected Database:", db.databaseName);

    const collection = db.collection("properties");

    const total = await collection.countDocuments();

    console.log("Properties Collection Count:", total);

    return db;

  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

const getDb = () => {
  if (!db) {
    throw new Error("Database is not connected");
  }

  return db;
};

module.exports = {
  connectDb,
  getDb
};