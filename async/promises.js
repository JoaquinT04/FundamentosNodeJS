function hola(nombre) {
	return new Promise(function(resolve, reject){
		setTimeout(() => {
			console.log(`Hola ${nombre}`);
			resolve(nombre);
		}, 1500)
	});
}

function hablar(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Blablablablablabla...');
			//resolve(nombre);
			reject('Hay un error');
		}, 1000);
	})
}

function adios(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log(`Adios ${nombre}`);
			resolve();
		}, 1000)
	});
}


// --

console.log('Iniciando el Proceso...');
hola('Joaquin')
	.then(hablar)
	.then(hablar)
	.then(hablar) 
	.then(hablar)
	.then(hablar)
	.then(adios)
	.then((nombre) => {
		console.log('Terminado el Proceso');
	})
	.catch(error => {
		console.error('Ha habido un error: ');
		console.error(error);
	})