import React, { Component } from 'react'
import { InputForm, InputFormPhoto_KTP, InputFormPhoto_Profile } from './Form'
import {Card, CardBody, CardHeader, CardTitle, Container} from 'reactstrap'

class InputBlacklist extends Component {
state = { }
render() {
return (
<Container>
    <Card className="p-5">
        <CardTitle>
            <h3 className="sub-title">Form Pengajuan Blacklist</h3>
        </CardTitle>
        <CardBody>
            <div className="row">
                <div className="col-12">

            <InputForm />
               
                </div>
            </div>
        </CardBody>
    </Card>
</Container>
);
}
}

export default InputBlacklist;