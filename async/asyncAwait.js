async function hola(nombre) {
	return new Promise(function(resolve, reject){
		setTimeout(() => {
			console.log(`Hola ${nombre}`);
			resolve(nombre);
		}, 1500)
	});
}

async function hablar(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Blablablablablabla...');
			resolve(nombre);
			//reject('Hay un error');
		}, 1000);
	})
}

async function adios(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log(`Adios ${nombre}`);
			resolve();
		}, 1000)
	});
}

async function main (){
  let nombre = 	await hola('Joaquin');
	await hablar();
	await hablar();
	await hablar();
	await adios(nombre);
	console.log('Terminamos el Proceso.')
}
console.log('Empezamos el Proceso...'); // Se muestra primero
main(); // esto es asincrono, se muestra al ultimo
console.log('Voy a se la segunda instrucción que se ejecute');// Se muestra segundo