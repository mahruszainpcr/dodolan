import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap'
import { SubJudul2, SubJudul } from '../reuse/Typografi';
import { ListCart } from '../reuse/ListView';
import {PageJudul} from '../reuse/Page';

class ProductCart extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
              <PageJudul title="Keranjang Belanja" deskripsiPage="Anda dapat melakukan pembelian lebih dari 1 distributor dengan sekali pembayaran."/>
                <Card>
                {/* <CardHeader>
                    <SubJudul name="Product Cart"/>
                </CardHeader> */}
                <CardBody>
                    <div className="row">
                        <div className="col-8  p-2">
                        <Card>
                            <CardBody>
                                <ul className="basic-list">
                                    <li>
                                        <ListCart nama_produk="Multi Roof" nama_distributor="Distributor 1" sub_sub_kategori="Atap Asbes" harga="35.000" />
                                    </li>
                                    <li>
                                        <ListCart nama_produk="Multi Roof 2" nama_distributor="Distributor 1" sub_sub_kategori="Atap Seng" harga="70.000" />
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-4  p-2">
                        <Card className="p-2 ">
                            {/* <h3 className="sub-title">Ringkasan Belanja</h3> */}
              
                            <SubJudul2 name="Ringkasan Belanja"/>

                            <CardBody className="mt-0 pt-0">
                            <div class="d-flex justify-content-between">
  <div class="p-2">Total Harga</div>
  <div class="p-2">Rp 20.000.000</div>
</div>
<button class="btn btn-success btn-square btn-block">Beli (3)</button>
                            </CardBody>
                        </Card>
                        </div>
                    </div>
                </CardBody>
            </Card>
          </div>

         );
    }
}

 
export default ProductCart;