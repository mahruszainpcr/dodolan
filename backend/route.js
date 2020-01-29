'use strict';

module.exports = function(app) {
    var brand = require('./controller/ProdukBrand');
    var kualitas_pasaran = require('./controller/KualitasPasaran');
    var produk_satuan = require('./controller/ProdukSatuan');
    var kategori_produk = require('./controller/KategoriProduk');
    var produk_sub_kategori = require('./controller/SubKategoriProduk');
    var distributor = require('./controller/Distributor');
    var produk = require('./controller/Produk');

    //---------------------- Brand ----------------------    
    app.route('/api/brand')
        .get(brand.getProdukBrand);
    app.route('/api/brand')
        .post(brand.createProdukBrand);
    app.route('/api/brand')
        .put(brand.updateProdukBrand);
    app.route('/api/brand')
        .delete(brand.deleteProdukBrand);

    //---------------------- Brand -----------------------

    app.route('/api/kualitas_pasaran')
        .get(kualitas_pasaran.getKualitasPasaran);
    app.route('/api/kualitas_pasaran')
        .post(kualitas_pasaran.createKualitasPasaran);
    app.route('/api/kualitas_pasaran')
        .put(kualitas_pasaran.updateKualitasPasaran);
    app.route('/api/kualitas_pasaran')
        .delete(kualitas_pasaran.deleteKualitasPasaran);

    //---------------------- Produk Satuan -----------------------

    app.route('/api/produk_satuan')
        .get(produk_satuan.getProdukSatuan);
    app.route('/api/produk_satuan')
        .post(produk_satuan.createProdukSatuan);
    app.route('/api/produk_satuan')
        .put(produk_satuan.updateProdukSatuan);
    app.route('/api/produk_satuan')
        .delete(produk_satuan.deleteProdukSatuan);

     //---------------------- Kategori Produk -----------------------

    app.route('/api/kategori_produk')
        .get(kategori_produk.getKategoriProduk);
    app.route('/api/kategori_produk')
        .post(kategori_produk.createKategoriProduk);
    app.route('/api/kategori_produk')
        .put(kategori_produk.updateKategoriProduk);
    app.route('/api/kategori_produk')
        .delete(kategori_produk.deleteKategoriProduk);

        //----------------------Sub Kategori Produk -----------------------

    app.route('/api/produk_sub_kategori')
        .get(produk_sub_kategori.getSubKategoriProduk);
    app.route('/api/produk_sub_kategori')
        .post(produk_sub_kategori.createSubKategoriProduk);
    app.route('/api/produk_sub_kategori')
        .put(produk_sub_kategori.updateSubKategoriProduk);
    app.route('/api/produk_sub_kategori')
        .delete(produk_sub_kategori.deleteSubKategoriProduk);
        app.route("/api/upload").post(kategori_produk.upload);

       //----------------------Distributor -----------------------

    app.route('/api/distributor')
        .get(distributor.getDistributor);
    app.route('/api/distributor')
        .post(distributor.createDistributor);
    app.route('/api/distributor')
        .put(distributor.updateDistributor);
    app.route('/api/distributor')
        .delete(distributor.deleteDistributor);

        //---------------------- Produk -----------------------

    app.route('/api/produk')
        .get(produk.getProduk);
    app.route('/api/produk')
        .post(produk.createProduk);
    app.route('/api/produk')
        .put(produk.updateProduk);
    app.route('/api/produk')
        .delete(produk.deleteProduk);
};
