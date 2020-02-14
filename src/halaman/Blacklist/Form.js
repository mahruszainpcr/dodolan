import React, { Component } from 'react'
import { Card, CardBody,Form, FormGroup, CardFooter, Label, Input } from 'reactstrap'
import { SelectRetail } from '../reuse/Select';
import {PageJudul} from '../reuse/Page'

class InputForm extends Component {
    
    state = {  }
    render() { 
        return ( 
            <div>
            <Form>
           <SelectRetail/>
            <InputTextArea id="alasan" name="Alasan" placeholder="Masukkan alasan anda terkait pengajuan blokir ini"/>
            <CardFooter className="clearfix">
                <input type="submit" value="simpan" className="btn btn-primary float-right"/>
                <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right"/>
            </CardFooter>
        </Form>
            </div>
         );
    }
}
 
class InputFormPhoto_KTP extends Component {
    state = {  }
    render() { 
        return ( 
            <Form>
    <FormGroup>
        <Label for="filer_input1">Silahkan Masukkan Foto KTP Anda</Label>
        <input type="file" name="files[]" id="filer_input1" multiple="multiple" />
    </FormGroup>
    </Form>
         );
    }
}
class InputFormPhoto_Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <Form>
    <FormGroup>
        <Label for="filer_input2">Silahkan Masukkan Foto Profil Anda</Label>
        <input type="file" name="files[]" id="filer_input2" multiple="multiple" />
    </FormGroup>
    </Form>
         );
    }
}
class InputText extends Component {
    state = {  }
    render() 
    
    {
        //  const props = this.props;
        return ( 
            <FormGroup>
                <Label for={this.props.id}>{this.props.name}</Label>
                <input type="text" name={this.props.id} id={this.props.id} placeholder={this.props.placeholder} className="form-control form-control-capitalize" />
            </FormGroup>
         );
    }
}
class InputTextArea extends Component {
    state = {  }
    render() 
    
    {
        //  const props = this.props;
        return ( 
            <FormGroup>
            <Label for={this.props.id}>Alasan</Label>
            <textarea name={this.props.id} id={this.props.id} placeholder={this.props.placeholder} className="form-control"/>
        </FormGroup>
         );
    }
}
class InputSelect extends Component {
    state = {  }
    render() { 
        return ( 
            <FormGroup>
            <Label for={this.props.id}>{this.props.name}</Label>
            <Input type="select" name={this.props.id} id={this.props.id}>
            <option>Pilihan 1</option>
            <option>Pilihan 2</option>
            <option>Pilihan 3</option>
            </Input>
        </FormGroup>
         );
    }
}

 
export  {InputForm,InputFormPhoto_KTP,InputFormPhoto_Profile};