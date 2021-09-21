const dayjs = require('dayjs'); 

let ahora = dayjs();
console.log(ahora);
console.log(ahora.toString());
console.log(ahora.format('YYYY/MM/DD - HH:MM'));
console.log(ahora.subtract(22,'year').format('YYYY/MM/DD - HH:MM'));