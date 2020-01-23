import React, { Component } from 'react'
import { InputForm, InputFormPhoto } from './Form'
import {SelectDistributor} from '../Distributor/Form'
import {Card, CardBody, CardHeader, CardTitle, Container} from 'reactstrap'

class InputProduk extends Component {
state = { }
render() {
return (
<Container>
    <Card className="p-5">
        <CardTitle>
            <h3 className="sub-title">Form Penambahan Produk</h3>
        </CardTitle>
        <CardBody>
            <div className="row">
                <div className="col-7">

            <InputForm />
                </div>
                <div className="col-5">
                    <InputFormPhoto/>
                   
                </div>
            </div>
        </CardBody>
    </Card>
</Container>
);
}
}

export default InputProduk;