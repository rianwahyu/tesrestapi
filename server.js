const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse applicationjson
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(30000, () => {
    console.log(`Server started on port`);
});