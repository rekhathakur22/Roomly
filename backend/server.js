require("dotenv").config();
const express = require('express');
const PropertyRouter = require('./routes/owner/Property.routes');
const { connectDb } = require('./config/db');
const cors = require('cors');
const UserRouter = require("./routes/user/User.routes");

const PORT = process.env.PORT || 4000;
const HOST = "0.0.0.0";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Roomly Backend is running successfully!");
});

app.use("/owner/properties", PropertyRouter);
app.use('/user/properties', UserRouter);

connectDb()
  .then(() => {
    app.listen(PORT, HOST, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Server startup failed:", error.message);
  });