import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap'
import { SubJudul } from '../reuse/Typografi';
import Invoice_Form from './Form';

class Index extends Component {
    state = {  }
    render() { 
        return (  
            <Card>
                <CardBody>
                    <Invoice_Form/>
                </CardBody>
            </Card>
        );
    }
}
 
export default Index;