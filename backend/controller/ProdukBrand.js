'use strict';

var response = require('../res');
var connection = require('../conn');

exports.getProdukBrand = function(req, res) {
    connection.query('SELECT * FROM produk_brand', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.findProdukBrand = function(req, res) {
    
    var produk_brand_id = req.params.produk_brand_id;

    connection.query('SELECT * FROM produk_brand where id_produk_brand = ?',
    [ produk_brand_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.createProdukBrand = function(req, res) {
    
    var nama_produk_brand = req.body.nama_produk_brand;

    connection.query('INSERT INTO produk_brand ( nama_produk_brand	) values (?)',
    [ nama_produk_brand	], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.updateProdukBrand  = function(req, res) {
    
    var id_produk_brand = req.body.id_produk_brand;
    var nama_produk_brand = req.body.nama_produk_brand;

    connection.query('UPDATE produk_brand SET nama_produk_brand = ? WHERE id_produk_brand = ?',
    [ nama_produk_brand,  id_produk_brand ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah produk_brand!", res)
        }
    });
};

exports.deleteProdukBrand = function(req, res) {
    
    var id_produk_brand = req.body.id_produk_brand;

    connection.query('DELETE FROM produk_brand WHERE id_produk_brand = ?',
    [ id_produk_brand ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus produk_brand!", res)
        }
    });
};


exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};