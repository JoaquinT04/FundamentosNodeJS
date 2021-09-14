let nombre = process.env.NOMBRE || 'Sin Nombre';
let web = process.env.MI_WEB || 'no tengo web';
/* Casi todas las variables de entorno que tengamos fuera, que estan en 
el sistema, tienen que esta en MAYUSCULAS */

console.log(`Hola ${nombre}`);
console.log('Mi web es',web);
