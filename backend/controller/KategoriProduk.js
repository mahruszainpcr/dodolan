'use strict';

var response = require('../res');
var connection = require('../conn');

exports.getKategoriProduk = function(req, res) {
    connection.query('SELECT * FROM produk_kategori', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.findKategoriProduk = function(req, res) {
    
    var id_produk_kategori = req.params.id_produk_kategori;

    connection.query('SELECT * FROM produk_kategori where id_produk_kategori = ?',
    [ id_produk_kategori ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.createKategoriProduk = function(req, res) {
    
    var nama_produk_kategori = req.body.nama_produk_kategori;

    connection.query('INSERT INTO produk_kategori ( nama_produk_kategori	) values (?)',
    [ nama_produk_kategori	], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.updateKategoriProduk  = function(req, res) {
    
    var id_produk_kategori = req.body.id_produk_kategori;
    var nama_produk_kategori = req.body.nama_produk_kategori;

    connection.query('UPDATE produk_kategori SET nama_produk_kategori = ? WHERE id_produk_kategori = ?',
    [ nama_produk_kategori,  id_produk_kategori ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah produk_kategori!", res)
        }
    });
};

exports.deleteKategoriProduk = function(req, res) {
    
    var id_produk_kategori = req.body.id_produk_kategori;

    connection.query('DELETE FROM produk_kategori WHERE id_produk_kategori = ?',
    [ id_produk_kategori ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus produk_kategori!", res)
        }
    });
};

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: "../public/uploads/",
    filename: function(req, file, cb){
       cb(null,"foto-produk-" + Date.now() + path.extname(file.originalname));
    }
 });
 
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("myImage");

exports.upload = function(req, res) {
    upload(req, res, (err) => {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file.filename);//Here you get file.
        /*Now do where ever you want to do*/
        if(!err)
           return res.send(200).end();
     });
};
