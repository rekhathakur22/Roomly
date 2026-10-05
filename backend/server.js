require("dotenv").config();
const express = require('express');
const PropertyRouter = require('./routes/owner/Property.routes');
const {connectDb}= require('./config/db')
const cors = require('cors');

const PORT  = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/owner/properties",PropertyRouter);

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Server startup failed:", error.message);
  });