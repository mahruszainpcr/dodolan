import React, { Component } from 'react'
import { InputForm, InputFormPhoto_KTP, InputFormPhoto_Profile } from './Form'
import {Card, CardBody, CardHeader, CardTitle, Container} from 'reactstrap'
import { SubJudul } from '../reuse/Typografi'

class InputBlacklist extends Component {
state = { }
render() {
return (
<Container>
    <Card className="p-5">
        <CardTitle>
            <SubJudul name="Form Pengajuan Judul"/>
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