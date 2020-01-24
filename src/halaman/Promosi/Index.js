import React, { Component } from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import { SelectDistributor } from '../reuse/Select'
import { SubJudul } from '../reuse/Typografi'

class Index extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
                <CardHeader>
                    <SubJudul name="Promosi"/>
                </CardHeader>
                <CardBody>
                    <div className="card-block">
                        <SelectDistributor/>
                        
                    </div>
                </CardBody>
            </Card>
         );
    }
}
 
export default Index;