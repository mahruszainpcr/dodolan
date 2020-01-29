'use strict';

var response = require('../res');
var connection = require('../conn');

exports.getSubKategoriProduk = function(req, res) {
    connection.query('SELECT * FROM produk_sub_kategori', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.findSubKategoriProduk = function(req, res) {
    
    var id_produk_sub_kategori = req.params.id_produk_sub_kategori;

    connection.query('SELECT * FROM produk_sub_kategori where id_produk_sub_kategori = ?',
    [ id_produk_sub_kategori ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.createSubKategoriProduk = function(req, res) {
    
    var nama_produk_kategori = req.body.nama_produk_kategori;

    connection.query('INSERT INTO produk_sub_kategori ( nama_produk_kategori	) values (?)',
    [ nama_produk_kategori	], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.updateSubKategoriProduk  = function(req, res) {
    
    var id_produk_sub_kategori = req.body.id_produk_sub_kategori;
    var nama_produk_kategori = req.body.nama_produk_kategori;

    connection.query('UPDATE produk_sub_kategori SET nama_produk_kategori = ? WHERE id_produk_sub_kategori = ?',
    [ nama_produk_kategori,  id_produk_sub_kategori ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah produk_sub_kategori!", res)
        }
    });
};

exports.deleteSubKategoriProduk = function(req, res) {
    
    var id_produk_sub_kategori = req.body.id_produk_sub_kategori;

    connection.query('DELETE FROM produk_sub_kategori WHERE id_produk_sub_kategori = ?',
    [ id_produk_sub_kategori ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus produk_sub_kategori!", res)
        }
    });
};


exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};