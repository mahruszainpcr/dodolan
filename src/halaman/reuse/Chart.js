import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import { Card, CardHeader, CardBody } from 'reactstrap';
import { SubJudul } from './Typografi';

class Kurva extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
                <CardHeader>
                    <SubJudul name="Percobaan Chart"/>
                </CardHeader>
                <CardBody className="card-block">
                    
            <div className={"my-pretty-chart-container"}>
            <Chart
              chartType="ScatterChart"
              data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
              width="100%"
              height="400px"
              legendToggle
            />
          </div>
                </CardBody>
            </Card>
         );
    }
}
 
export default Kurva;