// const process = require('process');

process.on('beforeExit', () => {
	console.log('El Proceso va a terminar');
});

process.on('exit', () => {
	console.log('El Proceso acabó');
	// El siguiente SeTimeout no se ejecutara nunca porque una vez se ejecuta el exit ya nos hemos desconectado totalmente del event loop
	setTimeout(() => {
		console.log('Esto no se va a ver nunca');
	}, 100);
});

setTimeout(() => {
	console.log('Esto si se va a ver nunca');
}, 100);

process.on('uncaughtException', (err, origen) => {
	console.error('Se nos ha olvidado capturar un error');
	console.error(err);
	setTimeout(() => {
		console.log('Esto viene desde las excepciones');
	}, 100);
});

functionQueNoExiste();

console.log('Esto si el error no se recoje, esto no sale')

/* process.on('uncaughtRejection', () => {}); // para promesas que se han rechazado pero no tienen un try y catch */
