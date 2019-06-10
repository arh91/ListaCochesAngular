'use strict'
var express = require('express')
var CarController = require('../controllers/car')
var api = express.Router();

api.get('/prueba/:Alvaro?', CarController.prueba);
api.get('/car/:id', CarController.getCar); //Añadimos enlace a función getCar en archivo cars.js de la carpeta controller
api.get('/cars/', CarsController.getCars); //Añadimos enlace a función getCars en archivo cars.js de la carpeta controller
api.post('/car/', CarController.saveCar); //Añadimos enlace a función saveCars ......................
api.put('/car/:id', CarController.updateCar);
api.delete('/car/:id', CarController.deleteCar);


 


module.exports = api
