'use strict';

module.exports = function(app) {
    var brand = require('./controller/ProdukBrand');

    
    app.route('/api/brand')
        .get(brand.getProdukBrand);
    app.route('/api/brand')
        .post(brand.createProdukBrand);
    app.route('/api/brand')
        .put(brand.updateProdukBrand);
    app.route('/api/brand')
        .delete(brand.deleteProdukBrand);
};
