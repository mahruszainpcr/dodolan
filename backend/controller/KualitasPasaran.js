'use strict';

var response = require('../res');
var connection = require('../conn');

exports.getKualitasPasaran = function(req, res) {
    connection.query('SELECT * FROM produk_kualitas_pasaran', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.findKualitasPasaran = function(req, res) {
    
    var produk_kualitas_pasaran_id = req.params.produk_kualitas_pasaran_id;

    connection.query('SELECT * FROM produk_kualitas_pasaran where id_kualitas_pasaran = ?',
    [ produk_kualitas_pasaran_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.createKualitasPasaran = function(req, res) {
    
    var nama_kualitas_pasaran = req.body.nama_kualitas_pasaran;

    connection.query('INSERT INTO produk_kualitas_pasaran ( nama_kualitas_pasaran	) values (?)',
    [ nama_kualitas_pasaran	], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.updateKualitasPasaran  = function(req, res) {
    
    var id_kualitas_pasaran = req.body.id_kualitas_pasaran;
    var nama_kualitas_pasaran = req.body.nama_kualitas_pasaran;

    connection.query('UPDATE produk_kualitas_pasaran SET nama_kualitas_pasaran = ? WHERE id_kualitas_pasaran = ?',
    [ nama_kualitas_pasaran,  id_kualitas_pasaran ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah produk_kualitas_pasaran!", res)
        }
    });
};

exports.deleteKualitasPasaran = function(req, res) {
    
    var id_kualitas_pasaran = req.body.id_kualitas_pasaran;

    connection.query('DELETE FROM produk_kualitas_pasaran WHERE id_kualitas_pasaran = ?',
    [ id_kualitas_pasaran ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus produk_kualitas_pasaran!", res)
        }
    });
};


exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};