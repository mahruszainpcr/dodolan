'use strict';

var response = require('../res');
var connection = require('../conn');

exports.getProdukSatuan = function(req, res) {
    connection.query('SELECT * FROM produk_satuan', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.findProdukSatuan = function(req, res) {
    
    var id_produk_satuan = req.params.id_produk_satuan;

    connection.query('SELECT * FROM produk_satuan where id_kualitas_pasaran = ?',
    [ id_produk_satuan ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.createProdukSatuan = function(req, res) {
    
    var nama_produk_satuan = req.body.nama_produk_satuan;

    connection.query('INSERT INTO produk_satuan ( nama_produk_satuan	) values (?)',
    [ nama_produk_satuan	], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.updateProdukSatuan  = function(req, res) {
    
    var id_kualitas_pasaran = req.body.id_kualitas_pasaran;
    var nama_produk_satuan = req.body.nama_produk_satuan;

    connection.query('UPDATE produk_satuan SET nama_produk_satuan = ? WHERE id_kualitas_pasaran = ?',
    [ nama_produk_satuan,  id_kualitas_pasaran ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah produk_satuan!", res)
        }
    });
};

exports.deleteProdukSatuan = function(req, res) {
    
    var id_kualitas_pasaran = req.body.id_kualitas_pasaran;

    connection.query('DELETE FROM produk_satuan WHERE id_kualitas_pasaran = ?',
    [ id_kualitas_pasaran ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus produk_satuan!", res)
        }
    });
};


exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};