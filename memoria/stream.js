const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('utf-8');
//  con esto nos evitamos escribir el toString

/* readableStream.on('data', function (chunk) {
	data += chunk;
	// guardamos todos los chunk de datos en data, hacemos esto si el archivo es enorme y necesita traer muchos chunks de datos
});

readableStream.on('end', function () {
	console.log(data);
}) */

/* process.stdout.write('Hola'); // aqui estamos escribiendo en el buffer de la salida del sistema
process.stdout.write('que tal?');
process.stdout.write('perro'); */

const Transform = stream.Transform;

function Mayus() {
	Transform.call(this);	
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
	chunkMayus = chunk.toString().toUpperCase();
	this.push(chunkMayus);
	cb();
};

let mayus = new Mayus();

readableStream
	.pipe(mayus)
	.pipe(process.stdout);


