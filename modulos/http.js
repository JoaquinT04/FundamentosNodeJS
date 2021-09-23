const http = require('http');

http.createServer(router).listen(3000);

function router (request, response) {
	console.log('Nueva petición!');
	console.log(request.url);

	switch(request.url){
		case '/hola':
			let saludo = hola();
			response.write(saludo);
			response.end();
			break;
		default: 
			response.write('Error 404, nose que es lo que quieres');
			response.end();
	}

/* 	response.writeHead(201, { 'Content-Type': 'text/html'});
	// Escribir respuesta al usuario
	response.write('Hola ya se usar http de NodeJS')
	
	response.end(); */

	function hola() {
		return 'Hola que tal?';
	}

	/*
	para hacer el debugger 
	node --inspect archivo
	ir a chrome y escribir el localhost
	ir a Chrome y escribir en el buscador
	chrome://inspect 
	*/
}

console.log('Escuchando http en el puerto 3000');