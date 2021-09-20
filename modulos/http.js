const http = require('http');

function router (request, response) {
	console.log('Nueva petición!');
	console.log(request.url);

	switch(request.url){
		case '/hola':
			response.write('Hola que tal?');
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
}

http.createServer(router).listen(3000);

console.log('Escuchando http en el puerto 3000');