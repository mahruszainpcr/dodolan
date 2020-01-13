import React,{ Component } from 'react'

class DetailProduct extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="row">
  <div className="col-md-12">
    {/* Product detail page start */}
    <div className="card product-detail-page">
      <div className="card-block">
        <div className="row">
          <div className="col-lg-5 col-xs-12">
            <div className="port_details_all_img row">
              <div className="col-lg-12 m-b-15">
                <div id="big_banner">
                  <div className="port_big_img">
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-l-1.jpg" alt="Big_ Details" />
                  </div>
                  <div className="port_big_img">
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-l-2.jpg" alt="Big_ Details" />
                  </div>
                  <div className="port_big_img">
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-l-3.jpg" alt="Big_ Details" />
                  </div>
                  <div className="port_big_img">
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-l-4.jpg" alt="Big_ Details" />
                  </div>
                  <div className="port_big_img">
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-l-5.jpg" alt="Big_ Details" />
                  </div>
                  <div className="port_big_img">
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-l-6.jpg" alt="Big_ Details" />
                  </div>
                  <div className="port_big_img">
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-l-7.jpg" alt="Big_ Details" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 product-right">
                <div id="small_banner">
                  <div>
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-s-1.jpg" alt="small-details" />
                  </div>
                  <div>
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-s-2.jpg" alt="small-details" />
                  </div>
                  <div>
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-s-3.jpg" alt="small-details" />
                  </div>
                  <div>
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-s-4.jpg" alt="small-details" />
                  </div>
                  <div>
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-s-5.jpg" alt="small-details" />
                  </div>
                  <div>
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-s-6.jpg" alt="small-details" />
                  </div>
                  <div>
                    <img className="img img-fluid" src="..\files\assets\images\product-detail\pro-d-s-7.jpg" alt="small-details" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xs-12 product-detail" id="product-detail">
            <div className="row">
              <div>
                <div className="col-lg-12">
                  <span className="txt-muted d-inline-block">Product Code: <a href="#!"> { this.props.idProduct} </a> </span>
                  <span className="f-right">Stok : <a href="#!"> { this.props.statusProduct} </a> </span>
                </div>
                <div className="col-lg-12">
                  <h4 className="pro-desc">{ this.props.namaProduct}</h4>
                </div>
                <div className="col-lg-12">
                  <span className="txt-muted"> Merk : {this.props.merkProduct} </span>
                </div>
                <div class="stars stars-example-css m-t-15 detail-stars col-lg-12">
                                                                            <select id="product-view" class="rating-star" name="rating" autocomplete="off">
                                                                                <option value="1">1</option>
                                                                                <option value="2">2</option>
                                                                                <option value="3">3</option>
                                                                                <option value="4">4</option>
                                                                                <option value="5">5</option>
                                                                            </select>
                                                                        </div>
                <div className="col-lg-12">
                  <span className="text-primary product-price">Rp {this.props.hargaProduct} </span>
                  <hr />
                  <p>{ this.props.deskripsiProduct}
                  </p>
                  <hr />
                  <h6 className="f-16 f-w-600 m-t-10 m-b-10">Quantity</h6>
                </div>
                <div className="col-xl-3 col-sm-12">
                  <div className="p-l-0 m-b-25">
                    <div className="input-group">
                      <span className="input-group-btn">
                        <button type="button" className="btn btn-default btn-number shadow-none btn-sm" disabled="disabled" data-type="minus" data-field="quant[1]">
                          <span className="icofont icofont-minus m-0" />
                        </button>
                      </span>
                      <input type="text" name="quant[1]" className="form-control input-number text-center" defaultValue={1} />
                      <span className="input-group-btn">
                        <button type="button" className="btn btn-default btn-number shadow-none btn-sm" data-type="plus" data-field="quant[1]">
                          <span className="icofont icofont-plus m-0" />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12 mob-product-btn">
                  <button type="button" className="btn btn-primary waves-effect waves-light m-r-20">
                    <i className="icofont icofont-cart-alt f-16" /><span className="m-l-10">Tambah ke keranjang</span>
                  </button>
                  <button type="button" className="btn btn-outline-primary waves-effect waves-light m-r-20" data-toggle="tooltip" title="Add to wishlist">
                    <i className="icofont icofont-heart-alt f-16 m-0" />
                  </button>
                  <button type="button" className="btn btn-outline-primary waves-effect waves-light" data-toggle="tooltip" title="Quick view">
                    <i className="icofont icofont-eye-alt f-16 m-0" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product detail page end */}
  </div></div>


         );
    }
}
 
export default DetailProduct;