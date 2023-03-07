const express = require('express');
const characterController = require('../controllers/characterController');

const characterRoute = express.Router();

characterRoute.post('/create', characterController.create)
characterRoute.get('/getAll', characterController.getCharacters)

module.exports = characterRoute;