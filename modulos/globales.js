/* TRATA DE NO USAR VARIABLES GLOBALES UWU */
let i = 0;
let intervalo = setInterval( function() {
	console.log('Hola');
	if(i === 3){
		clearInterval(intervalo);
	}
	i++;
}, 1000)

setImmediate(function(){
	console.log('Hola Immediate');
});

/* console.log(process); */

/* console.log(__filename); */

globalThis.miVariable = 'elValor';

console.log(global.miVariable);
