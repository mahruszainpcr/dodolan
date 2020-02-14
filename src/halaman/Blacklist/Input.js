import React, { Component } from 'react'
import { InputForm, InputFormPhoto_KTP, InputFormPhoto_Profile } from './Form'
import {Card, CardBody, CardHeader, CardTitle, Container} from 'reactstrap'
import { SubJudul } from '../reuse/Typografi'
import {PageJudul} from '../reuse/Page'


class InputBlacklist extends Component {
state = { }
render() {
return (
<Container>
  <PageJudul title="Blacklist" deskripsiPage="Halaman yang menyajikan fitur blacklist." />

    <Card className="">
        <CardTitle>
            {/* <CardHeader>
            <SubJudul name="Form Pengajuan Blacklist"/>
            </CardHeader> */}
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