import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap'
import { SubJudul2 } from '../reuse/Typografi';
import { ListCart } from '../reuse/ListView';

class ProductCart extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
                <CardHeader>
                    {/* <SubJudul name="Product Cart"/> */}
                </CardHeader>
                <CardBody>
                    <div className="row">
                        <div className="col-8  p-2">
                        <Card>
                            <CardBody>
                                <ul className="basic-list">
                                    <li>
                                        <ListCart/>
                                    </li>
                                    <li>
                                        <ListCart/>
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
         );
    }
}

 
export default ProductCart;