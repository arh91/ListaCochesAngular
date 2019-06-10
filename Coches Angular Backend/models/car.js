'use strict'
var mongoose =require('mongoose')
var Schema = mongoose.Schema;

var CarSchema = Schema(
	{
_id: {type:Schema.ObjectId, auto:true},
		modelo:String,
		precio:Number
	}
)

// exportamos el modelo
module.exports = mongoose.model('Car', CarSchema)
