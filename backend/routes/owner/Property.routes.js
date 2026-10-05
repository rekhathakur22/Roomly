const express = require('express');
const PropertyRouter = express.Router();
const {createProperty} = require('../../controllers/owner/Property.controller')

PropertyRouter.post("/",createProperty);


module.exports =  PropertyRouter;