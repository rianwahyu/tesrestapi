'use strict';

var response = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API ready", res)
}

//menampilkan data mahasiswa

exports.tampilDataMahasiswa = function(req, res){
    connection.query('SELECT * FROM MAHASISWA', function(error, rows, fileds) {
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
}