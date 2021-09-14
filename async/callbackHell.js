function hola(nombre, miCallback) {
	setTimeout(() => {
		console.log(`Hola ${nombre}`);
		miCallback(nombre);
	}, 1500)
}

function hablar(callbackHablar) {
	setTimeout(() => {
		console.log('Blablablablablabla...');
		callbackHablar();
	}, 1000);
}

function adios(nombre, otroCallback) {
	setTimeout(function() {
		console.log(`Adios ${nombre}`);
		otroCallback();
	}, 1000)
}

function conversacion(nombre, veces, callback) {
	if(veces > 0 ){	
		hablar(function(){
			conversacion(nombre, veces-1, callback)
		})
	} else {
		adios(nombre, callback);
	}
}

// --

console.log('Iniciando Proceso');
hola('Joaquin' ,function (nombre){
	conversacion(nombre, 3, function(){
		console.log('Proceso Terminado...');
	})
})
/* 	hablar(function (){
		hablar(function (){
			hablar(function (){
				adios(nombre, function() {
					console.log('Terminando Proceso...');
				})

			})
	
		})
	})

}); */