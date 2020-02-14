import React, { Component } from 'react';
import {} from 'reactstrap'
import {} from 'awesome-bootstrap-checkbox'
require('../Produk/style.css')
class ListProduct extends Component {
state = { }
render() {
return (
<div></div>

);
}
}
class ListCart extends Component {
state = { }
render() {
return (
<div className="card list-view-media">

<div className="form-check abc-checkbox abc-checkbox-primary ml-2 mt-2 mb-0">
  <input className="form-check-input" id="checkbox4" type="checkbox" defaultChecked/>
  <label className="form-check-label" htmlFor="checkbox4">
    
  </label>
</div>


    <div className="card-block mt-0">
        <div className="media">
            <a className="media-left" href="#">
                <img className="media-object card-list-img" src="..\files\assets\images\avatar-1.jpg"
                    alt="Generic placeholder image" />
            </a>
            <div className="media-body">
                <div className="col-xs-12">
                    <h4 className="d-inline-block">
                        {this.props.nama_produk}</h4>
                    <label className="label label-info ml-2">{this.props.nama_distributor}</label>
                </div>
                <div className="f-13 text-muted m-b-15">
                    {this.props.sub_sub_kategori}
                </div>
                <h6 className="text-success">Rp <span>{this.props.harga}</span></h6>
                <div className="m-t-15">
                    <div class="d-flex justify-content-between align-items-center row">
                        <div class="p-2 col-6">


                            <a data-toggle="collapse" href="#catatan" role="button" aria-expanded="false"
                                aria-controls="collapseExample">
                                <h6 classname="text-warning"><i className="fa fa-sticky-note" /> Tulis Catatan</h6>
                            </a>
                            <div className="collapse" id="catatan">
                                <div className="card card-body">
                                    <textarea class="form-control max-textarea" rows="2"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 col-6">
                            <div className="d-flex justify-content-end align-items-center">
                                <div className="row no-gutters">
                                    <div className="col-4">
                                    </div>
                                    <div className="col-4">
                                    </div>
                                </div>
                                <h6>Jumlah</h6>
                                <input type="number" name="jumlah_produk" className="form-control ml-2" defaultValue="15" min="1"
                                    style={{width:"60px"}} />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
}
}


export {ListProduct,ListCart};