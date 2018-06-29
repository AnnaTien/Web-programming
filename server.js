var express = require('express');
var bodyparser = require('body-parser');

var connection = require('./Dbconnection');
var routesproduct = require('./routes/routesproduct');
var routescatalog = require('./routes/routescatalog');
var routescompany = require('./routes/routescompany');
var routesuser = require('./routes/routesuser');
var routesorders = require('./routes/routesorders');
var routestransaction = require('./routes/routestransaction');
var routesstatus = require('./routes/routesstatus');
var app = express();
var cors = require('cors');
app.use(bodyparser.urlencoded({
  extended: true
})); //support x-www-form-urlencoded
app.use(cors());
app.use(bodyparser.json());
//lấy link product
app.use('/api', routesproduct);
app.use('/api', routescatalog);
app.use('/api', routescompany);
app.use('/api', routesuser);
app.use('/api', routesorders);
app.use('/api', routestransaction);
app.use('/api', routesstatus);


var server = app.listen(3000, "127.0.0.1", function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

});

module.exports = app;