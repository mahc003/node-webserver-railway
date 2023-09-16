const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

const data = {
  nombre: 'Mario Higuera',
  titulo: 'Curso de node'
}

app.get('/', function (req, res) {
  res.render('home', data);
})

app.get('/elements', function (req, res) {
  res.render('elements', data);
})

app.get('/generic', function (req, res) {
  res.render('generic', data);
})

/*app.get('/generic', function (req, res) {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', function (req, res) {
  res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})*/

app.listen(port, () => {
  console.log(`Escuchando en mi host el puerto ${ port }`)
})
