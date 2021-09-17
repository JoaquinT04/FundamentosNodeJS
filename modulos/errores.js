function otraFuncion() {
	return seRompe();
}

function seRompe(){
	return 3 + z;
}

function seRompeAsincrona(cb) {
	setTimeout(() => {
		try{
			return 3 + z;
		} catch (err){
			console.log('Error, en mi funcion asincrona');
			cb(err);
		}
	});
}

try{
//	otraFuncion();
	seRompeAsincrona(function (err) {
		console.log(err.message);
	});
} catch(err) {
	console.error('Algo se ha roto .....');
	console.log(err);
	console.log(err.message);
	console.log('hemos capturado el error');
}

console.log('Esto de aqui esta al final');