import React, { Component } from 'react';
import { Card, CardBody,Form, FormGroup, CardFooter, Label, Input, CardHeader, CardText, Button} from 'reactstrap'
import { SubJudul } from '../reuse/Typografi';
import { SelectProduk,SelectPromosi } from '../reuse/Select';


class InputPromosiProdukBonus extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
              <CardHeader>
                  <SubJudul name="Form Input Promosi Bonus"/>
              </CardHeader>
              <CardBody>
                  <div className="card-block">
                  <SelectProduk/>
                  <SelectPromosi/>
                <InputNum name="jumlah" nama="Jumlah"/>
                  </div>
              </CardBody>
          </Card>
         );
    }
}
class InputNum extends Component {
    state = { }
    render() {
    return (
    <FormGroup>
    <Label for={this.props.name}>{this.props.nama}</Label>
        <input type="number" id={this.props.name} name={this.props.name} placeholder="ex.1212" className="form-control" />
    </FormGroup>
    );
    }
    }
 
export default InputPromosiProdukBonus;