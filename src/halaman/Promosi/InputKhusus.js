import React, { Component } from 'react';
import { Card, CardBody,Form, FormGroup, CardFooter, Label, Input, CardHeader, CardText, Button} from 'reactstrap'
import { SubJudul } from '../reuse/Typografi';
import { SelectDistributor, SelectRetail } from '../reuse/Select';

class InputPromosiKhusus extends Component {
    state = {  }
    render() { 
        return ( 
          <Card>
              <CardHeader>
                  <SubJudul name="Form Input Promosi Khusus"/>
              </CardHeader>
              <CardBody>
                  <div className="card-block">
                     <SelectDistributor/>
                     <SelectRetail/>
                     <InputTextArea id="keterangan" name="Keterangan"/>
                     <InputTanggal id="tanggal_pengajuan" name="Tanggal Pengajuan"/>
                    <input type="hidden" value="1" name="status"/>
                     

                  </div>
              </CardBody>
          </Card>
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
    class InputTanggal extends Component {
        state = { }
        render()
        
        {
        // const props = this.props;
        return (
        <FormGroup>
            <Label for={this.props.id}>{this.props.name}</Label>
            <input id="dropper-radius" className="form-control" type="text" placeholder="Klik kolom ini" />
            </FormGroup>
                 );
            }
        }
    
export default InputPromosiKhusus;