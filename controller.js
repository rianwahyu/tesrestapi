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
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
}

//menampilkan semua data mahasiswa beradarkan id 

exports.tampilMahasiswabyID = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id = ?', [id], 
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res);
            }
    });
}