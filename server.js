const express = require('express');
const bodyParser = require('body-parser');

var morgan = require('morgan');

const app = express();

//parse applicationjson
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//panggil routes js 
var routes = require('./routes');
routes(app);

//daftarkan menu routes dari index
app.use('/auth', require('./middleware'));

app.listen(3000, () => {
    console.log(`Server started on port`);
});