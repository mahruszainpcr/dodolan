const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
var cors = require('cors')

app.use(cors())
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  port:'8889',
  user: 'root',
  password: 'root',
  database: 'dodolan'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all produks
app.get('/api/produks',(req, res) => {
  let sql = "SELECT * FROM produk";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single produk
app.get('/api/produks/:id',(req, res) => {
  let sql = "SELECT * FROM produk WHERE id_produk="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//add new produk
app.post('/api/produks',(req, res) => {
  let data = {nama_produk: req.body.nama_produk, 
            deskripsi_produk: req.body.deskripsi_produk,
            harga_dalam_produk: req.body.harga_dalam_produk,
            harga_luar_produk: req.body.harga_luar_produk,
            harga_pulau_produk: req.body.harga_pulau_produk,
            id_kelas_pasaran: req.body.id_kelas_pasaran,
            id_sub_sub_kategori: req.body.id_sub_sub_kategori,
            id_brand: req.body.id_brand,
            id_satuan: req.body.id_satuan,
            id_ukuran: req.body.id_ukuran,
            id_warna: req.body.id_warna,
            id_distributor: req.body.id_distributor};
  let sql = "INSERT INTO produk SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//update produk
app.put('/api/produks/:id',(req, res) => {
  let sql = "UPDATE produk SET produk_name='"+req.body.produk_name+"', produk_price='"+req.body.produk_price+"' WHERE id_produk="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete produk
app.delete('/api/produks/:id',(req, res) => {
  let sql = "DELETE FROM produk WHERE id_produk="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
//------------------------Kualitas Pasaran-------------------------------
app.get('/api/produk_kualitas_pasaran',(req, res) => {
    let sql = "SELECT * FROM produk_kualitas_pasaran";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  }); 
  //------------------------Brand Produk-------------------------------
app.get('/api/produk_brand',(req, res) => {
    let sql = "SELECT * FROM produk_brand";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  }); 

   //------------------------Satuan Produk-------------------------------
app.get('/api/produk_satuan',(req, res) => {
    let sql = "SELECT * FROM produk_satuan";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  }); 
  //------------------------Produk Ukuran-------------------------------
app.get('/api/produk_ukuran',(req, res) => {
    let sql = "SELECT * FROM produk_ukuran";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  }); 

//Server listening
app.listen(3001,() =>{
  console.log('Server started on port 3001...');
});