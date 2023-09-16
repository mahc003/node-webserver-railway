

const http = require('http');


http.createServer( (request, response) => {

  //  response.setHeader('Content-Disposition','attachment; filename=clientes.csv')
  //  response.writeHead(200, {'Content-Type': 'application/csv'});

    response.write('Hola Mundo');
    /*response.write('2, Marcela\n');
    response.write('3, Mateo\n');
    response.write('4, Gabriela\n');*/

    response.end();

}).listen('8080');

console.log('escuchando puerto',8080);
