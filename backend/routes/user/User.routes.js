const express = require('express');
const UserRouter = express.Router();
const  searchProperty  = require('../../controllers/user/SearchPropertyController');
const defaultProperties = require('../../controllers/user/DefaultProperties')


UserRouter.get('/search',searchProperty);
UserRouter.get('/',defaultProperties);

module.exports = UserRouter;