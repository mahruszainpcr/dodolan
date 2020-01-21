import React, { Component } from 'react'
import { InputForm, InputFormPhoto_KTP, InputFormPhoto_Profile } from './Form'
import {Card, CardBody, CardHeader, CardTitle, Container} from 'reactstrap'

class InputDistributor extends Component {
state = { }
render() {
return (
<Container>
    <Card className="p-5">
        <CardTitle>
            <h3 className="sub-title">Form Penambahan Distributor</h3>
        </CardTitle>
        <CardBody>
            <div className="row">
                <div className="col-7">

            <InputForm />
                </div>
                <div className="col-5">
                    <InputFormPhoto_KTP/>
                    <InputFormPhoto_Profile/>
                </div>
            </div>
        </CardBody>
    </Card>
</Container>
);
}
}

export default InputDistributor;