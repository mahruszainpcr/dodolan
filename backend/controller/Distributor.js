"use strict";

var response = require("../res");
var connection = require("../conn");

exports.getDistributor = function(req, res) {
  connection.query("SELECT * FROM distributor", function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
exports.findDistributor = function(req, res) {
  var distributor_id = req.params.distributor_id;

  connection.query(
    "SELECT * FROM distributor where id_distributor = ?",
    [distributor_id],
    function(error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
exports.createDistributor = function(req, res) {
  var nama_produk = req.body.nama_produk;
  var nama_distributor = req.body.nama_distributor;
  var alamat_distributor = req.body.alamat_distributor;
  var no_ktp_distributor = req.body.no_ktp_distributor;
  var harga_pulau_produk = req.body.harga_pulau_produk;
  var username_distributor = req.body.username_distributor;
  var email_distributor = req.body.email_distributor;
  var x_distributor = req.body.x_distributor;
  var y_distributor = req.body.y_distributor;
  var no_hp_distributor = req.body.no_hp_distributor;
  var deskripsi_distributor = req.body.deskripsi_distributor;
  var catatan_distributor = req.body.catatan_distributor;
  var foto_ktp_distributor = req.body.foto_ktp_distributor;
  var foto_profile_distributor = req.body.foto_profile_distributor;
  var status = req.body.status;
  var password_disributor = req.body.password_disributor;

  connection.query(
    "INSERT INTO `distributor`(`id_produk`, `nama_produk`, `nama_distributor`, `alamat_distributor`, `no_ktp_distributor`, `harga_pulau_produk`, `username_distributor`, `email_distributor`, `x_distributor`, `y_distributor`, `no_hp_distributor`, `deskripsi_distributor`, `catatan_distributor`, `top`,foto_ktp_distributor,foto_profile_distributor,status,password_disributor) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [nama_produk,nama_distributor,alamat_distributor,no_ktp_distributor,harga_pulau_produk,username_distributor,email_distributor,x_distributor,y_distributor,no_hp_distributor,deskripsi_distributor,catatan_distributor,foto_ktp_distributor,foto_profile_distributor,status,password_disributor],
    function(error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan user!", res);
      }
    }
  );
};

exports.updateDistributor = function(req, res) {
    var nama_produk = req.body.nama_produk;
  var nama_distributor = req.body.nama_distributor;
  var alamat_distributor = req.body.alamat_distributor;
  var no_ktp_distributor = req.body.no_ktp_distributor;
  var harga_pulau_produk = req.body.harga_pulau_produk;
  var username_distributor = req.body.username_distributor;
  var email_distributor = req.body.email_distributor;
  var x_distributor = req.body.x_distributor;
  var y_distributor = req.body.y_distributor;
  var no_hp_distributor = req.body.no_hp_distributor;
  var deskripsi_distributor = req.body.deskripsi_distributor;
  var catatan_distributor = req.body.catatan_distributor;
  var foto_ktp_distributor = req.body.foto_ktp_distributor;
  var foto_profile_distributor = req.body.foto_profile_distributor;
  var status = req.body.status;
  var password_disributor = req.body.password_disributor;

  connection.query(
    "UPDATE distributor SET nama_distributor = ? WHERE id_distributor = ?",
    [nama_produk,nama_distributor,alamat_distributor,no_ktp_distributor,harga_pulau_produk,username_distributor,email_distributor,x_distributor,y_distributor,no_hp_distributor,deskripsi_distributor,catatan_distributor,foto_ktp_distributor,foto_profile_distributor,status,password_disributor],
    function(error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil merubah distributor!", res);
      }
    }
  );
};

exports.deleteDistributor = function(req, res) {
  var id_distributor = req.body.id_distributor;

  connection.query(
    "DELETE FROM distributor WHERE id_distributor = ?",
    [id_distributor],
    function(error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menghapus distributor!", res);
      }
    }
  );
};

exports.index = function(req, res) {
  response.ok("Hello from the Node JS RESTful side!", res);
};
