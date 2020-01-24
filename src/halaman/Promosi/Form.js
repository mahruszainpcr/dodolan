import React, { Component } from 'react';

import { SubJudul } from '../reuse/Typografi';
import { SelectDistributor } from '../reuse/Select';
import { Card, CardBody,Form, FormGroup, CardFooter, Label, Input, CardHeader, CardText, Button} from 'reactstrap'


class InputPromosi extends Component {
    state = {  }
    render() { 
        return ( 
          <Card>
              <CardHeader>
                  <SubJudul name="Form Input Promosi"/>
              </CardHeader>
              <CardBody>
                  <div className="card-block">
                      <SelectDistributor/>
                      <InputText id="nama_promosi" name="Nama Promosi"/>
                      <InputTextArea id="keterangan" name="Keterangan"/>

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
    
        <input type="number" name={this.props.name} placeholder="ex.1212" className="form-control" />
    </FormGroup>
    );
    }
    }
    
    class InputText extends Component {
    state = { }
    render()
    
    {
    // const props = this.props;
    return (
    <FormGroup>
        <Label for={this.props.id}>{this.props.name}</Label>
        <input type="text" name={this.props.id} id={this.props.id} placeholder={"Masukkan "+this.props.name+" baru"}
            className="form-control form-control-capitalize" />
    </FormGroup>
    );
    }
    }
    class InputTextArea extends Component {
    state = { }
    render()
    
    {
    // const props = this.props;
    return (
    <FormGroup>
        <Label for={this.props.id}>{this.props.name}</Label>
        <textarea name={this.props.id} id={this.props.id} placeholder={"Masukkan "+this.props.name+"  tentang promosi anda"} className="form-control" />
        </FormGroup>
             );
        }
    }
    
export default InputPromosi;