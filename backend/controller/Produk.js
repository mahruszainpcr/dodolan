"use strict";

var response = require("../res");
var connection = require("../conn");

exports.getProduk = function(req, res) {
  connection.query("SELECT * FROM produk, produk_brand WHERE produk.id_brand=produk_brand.id_produk_brand", function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
exports.findProduk = function(req, res) {
  var produk_brand_id = req.params.produk_brand_id;

  connection.query(
    "SELECT * FROM produk where id_produk_brand = ?",
    [produk_brand_id],
    function(error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
exports.createProduk = function(req, res) {
  var nama_produk = req.body.nama_produk;
  var deskripsi_produk = req.body.deskripsi_produk;
  var harga_dalam_produk = req.body.harga_dalam_produk;
  var harga_luar_produk = req.body.harga_luar_produk;
  var harga_pulau_produk = req.body.harga_pulau_produk;
  var id_kelas_pasaran = req.body.id_kelas_pasaran;
  var id_sub_sub_kategori = req.body.id_sub_sub_kategori;
  var id_brand = req.body.id_brand;
  var id_satuan = req.body.id_satuan;
  var id_ukuran = req.body.id_ukuran;
  var id_warna = req.body.id_warna;
  var id_distributor = req.body.id_distributor;

  connection.query(
    "INSERT INTO `produk`(`id_produk`, `nama_produk`, `deskripsi_produk`, `harga_dalam_produk`, `harga_luar_produk`, `harga_pulau_produk`, `id_kelas_pasaran`, `id_sub_sub_kategori`, `id_brand`, `id_satuan`, `id_ukuran`, `id_warna`, `id_distributor`, `top`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [nama_produk,deskripsi_produk,harga_dalam_produk,harga_luar_produk,harga_pulau_produk,id_kelas_pasaran,id_sub_sub_kategori,id_brand,id_satuan,id_ukuran,id_warna,id_distributor],
    function(error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan user!", res);
      }
    }
  );
};

exports.updateProduk = function(req, res) {
    var nama_produk = req.body.nama_produk;
    var deskripsi_produk = req.body.deskripsi_produk;
    var harga_dalam_produk = req.body.harga_dalam_produk;
    var harga_luar_produk = req.body.harga_luar_produk;
    var harga_pulau_produk = req.body.harga_pulau_produk;
    var id_kelas_pasaran = req.body.id_kelas_pasaran;
    var id_sub_sub_kategori = req.body.id_sub_sub_kategori;
    var id_brand = req.body.id_brand;
    var id_satuan = req.body.id_satuan;
    var id_ukuran = req.body.id_ukuran;
    var id_warna = req.body.id_warna;
    var id_distributor = req.body.id_distributor;

  connection.query(
    "UPDATE produk SET nama_produk_brand = ? WHERE id_produk_brand = ?",
    [nama_produk,deskripsi_produk,harga_dalam_produk,harga_luar_produk,harga_pulau_produk,id_kelas_pasaran,id_sub_sub_kategori,id_brand,id_satuan,id_ukuran,id_warna,id_distributor],
    function(error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil merubah produk!", res);
      }
    }
  );
};

exports.deleteProduk = function(req, res) {
  var id_produk_brand = req.body.id_produk_brand;

  connection.query(
    "DELETE FROM produk WHERE id_produk_brand = ?",
    [id_produk_brand],
    function(error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menghapus produk!", res);
      }
    }
  );
};

exports.index = function(req, res) {
  response.ok("Hello from the Node JS RESTful side!", res);
};
