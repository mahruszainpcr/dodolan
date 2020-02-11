import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap'
import { SubJudul } from '../reuse/Typografi';

class ProductCart extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
                <CardHeader>
                    <SubJudul name="Product Cart"/>
                </CardHeader>
                <CardBody>
                    <table className="table table-responsive table-striped dt-responsive nowrap dataTable no-footer dtr-inline cart-page">
                        </table>
                </CardBody>
            </Card>
         );
    }
}

 
export default ProductCart;