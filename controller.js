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

//menambahkan data mahasiswa
exports.tambahMahasiswa = function(req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?,?,?)', 
    [nim, nama, jurusan], function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasi; menambahkan Data ! ", res);
        }
    });
}

//mengubah data berdasarkan ID

exports.ubahMahasiswa = function(req, res){
    var id = req.body.id;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id=? ' , [nim, nama, jurusan, id], 
        function(error, rows, fields){
            if(error){
                console.log(error)
            }else{
                response.ok("Berhasi; mengubah Data ! ", res);
            }
        });
}

//menghapus Data Mahasiswa 
exports.hapusMahasiswa = function(req, res){
    var id = req.body.id;
    connection.query('DELETE FROM mahasiswa WHERE id=? ' ,[id], 
        function(error, rows, fields){
            if(error){
                console.log(error)
            }else{
                response.ok("Berhasil Hapus Data ! ", res);
            }
        });
}

//menampilkan mata kuliah group

exports.tampilGroupMatkul = function(req, res){
    connection.query('SELECT mahasiswa.id, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.skas FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id ORDER BY mahasiswa.id',
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.oknested(rows, res);
            }
        }
    )
}