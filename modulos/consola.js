console.log('Algo');
console.info('info');
console.error('Soy un console.error');
console.warn('Soy un console.warn');


var tabla = [
	{
		a: 1,
		b: 'a', 
	},
	{
		c: 9,
		d: 'z',
	}
]
console.log(tabla);
console.table(tabla);

console.group('Conver');
console.log('Holaa');
console.group('Bla');
console.log('BlaBlaBlaBla');
console.log('BlaBlaBlaBla');
console.log('BlaBlaBlaBla');
console.groupEnd('Bla');
console.log('Adios');
console.groupEnd('Conver');

console.log('otras weas');

function function1() {
	//
	console.group('function1');
	console.log('Esto es de la funcion1');
	console.log('Esto tambien');
	function2();
	console.groupEnd('function1');
}
function function2() {
	console.group('function2');
	console.log('Ahora estamos en la funcion2');
	console.log('Esto tambien es la funcion2');
	//
	console.groupEnd('function2');
}

console.log('Empezamos');
function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');
