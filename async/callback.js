function hola(nombre, miCallback) {
	setTimeout(() => {
		console.log(`Hola ${nombre}`);
		miCallback(nombre);
	}, 1500)
}

function adios(nombre, otroCallback) {
	setTimeout(function() {
		console.log(`Adios ${nombre}`);
		otroCallback();
	}, 1000)
}

console.log('Iniciando Proceso');
hola('Joaquin' ,function (nombre){
	adios(nombre, function() {
		console.log('Terminando Proceso...');
	})
});

/* Al resolverse mas rapido el setTimeout de adios, se mostrara antes que 
hola.
hola(nombre, function(){}); 
adios(nombre, function(){});  
*/