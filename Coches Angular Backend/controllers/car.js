
var Car = require('../models/car')

function saveCar(req, res) {
	var params = req.body
	// creamos un objeto del modelo Car
	var car = new Car();
	// rellenamos un el objeto
	car.modelo = params.modelo
	car.precio = params.precio
	// guardamos el coche
	car.save((err, carStored) => {
		if (err) { // si hay un error devolvemos un error de tipo servidor 500
			res.status(500).send({ menssage: 'error al guardar el coche' })
		} else {
			res.status(200).send({ accion: "save", car: carStored })
		}
	})
}

function getCars(req, res) {  //Función que sirve para obtener todos los coches de forma ordenada
	var params = req.body
	// obtenemos todos los coches ordenando por id
	Car.find({}).sort('-_id').exec((err, cars) => {
		if(err){ // si la consulta da un error
			res.status(500).send({accion:"get all", menssage: 'error al devolver los coches'})
		}else if(!cars){ // si no se han obtenido ningún
			res.status(404).send({accion:"get all", menssage: 'no hay coches guardados'})
		}else{ // si todo ha ido bien
			res.status(200).send({accion:"get all", data: cars})
		}
	})
}

function getCar(req, res) { //Obtenemos un sólo cohe (por id) de la base de datos
	// obtenemos el id del coche a buscar
	var carId = req.params.id
	// realizamos la consulta, buscando un coche por id
	Car.findById(carId, (err, carObtenido) => {
		if(err){ // si la consulta genera algun error
			res.status(500).send({accion:"get one", menssage: 'error al devolver el coche'})
		}else if(!carObtenido){ // si no se ha encontrado el coche
			res.status(404).send({accion:"get one", menssage: 'no hay coches'})
		}else{ // si todo ha ido bien
			res.status(200).send({ accion: "get one", data: carObtenido })
		}
	})
}

function updateCar(req, res) { //En esta función modificamos un coche existente en la base de datos
	// obtenemos el id del coche a modificar
	var carId = req.params.id
	// obtenemos los nuevo datos del coche
	var params = req.body
	// realizamos una consulta de actualización
	Car.findByIdAndUpdate(carId, params, (err,carUpdated)=>{
		if(err){ // si hay un error en la consulta devolvemos un error de tipo servidor 500
			res.status(500).send({menssage: 'error al actualizar el coche'})
		}else{ // si todo ha ido bien
			res.status(200).send({accion: "update", car: carUpdated})
		}
	})
}

function deleteCar(req, res) {
	// obtenemos el id del coche a borrar
	var carId = req.params.id
	// buscamos el coche que deseamos borrar
	Car.findById(carId, (err, carEncontrado) => {
		if(err){ // si hay un error en la consulta
			res.status(500).send({accion:"delete", menssage: 'error al devolver el coche'})
		}else if(!carEncontrado){ // si no se ha encontrado el coche
			res.status(404).send({accion:"delete", menssage: 'no existe el coche'})
		}else{ // ojo usa carEncontrado y no Car(que borra todo)
			carEncontrado.remove( (err)=> {
				if(err){ // si el coche no se ha podido borrar
					res.status(500).send({menssage: 'el coche no se ha podidio borrar'})
				}else{ // si todo ha ido bien
					res.status(200).send({message: "el coche se ha eliminado"})
				}
			})
		}
	})
}









module.exports = { getCar, getCars, saveCar, updateCar, deleteCar}

