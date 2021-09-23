function asincrona(callback) {
	setTimeout(() => {
		try {
			let a = 3 + z;
			callback(null, a);
		}catch (e){
			callback(e);
		}
	}, 1000);
}

/* Trow no va a funcionar en funciones asincronas
 try{
	asincrona(function (err, dato) {
		if (err){
			throw err;
		}
	
		console.log('Todo ha ido bien, mi data es: ', dato );
	}) 
}catch(e){
	console.error('Hemos capturado el error');
	console.error(e);
}
*/

asincrona(function (err, dato) {
	if (err){
		console.error('Tenemos un error ');
		console.error(err);
		// throw err;
		return false;
	}

	console.log('Todo ha ido bien, mi data es: ', dato );
}) 