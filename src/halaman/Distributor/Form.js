import React, {Component} from 'react'
import { Card, CardHeader, Form, FormGroup, Label, Input, FormText, Button, CardFooter} from 'reactstrap'

class InputForm extends Component {
state = { }
render() {
return (
<Form>
    <FormGroup>
        <Label for="nama_distributor">Nama Distributor</Label>
        <Input type="text" name="nama_distributor" id="nama_distributor" placeholder="Masukkan nama distributor anda" />
    </FormGroup>
    <FormGroup>
        <Label for="alamat_distributor">Alamat</Label>
        <Input type="text" name="alamat_distributor" id="alamat_distributor" placeholder="Masukkan alamat distributor anda" />
    </FormGroup>
    <FormGroup>
        <Label for="no_ktp_distributor">No KTP</Label>
        <Input type="text" name="no_ktp_distributor" id="no_ktp_distributor" placeholder="Masukkan nomor ktp distributor anda" />
    </FormGroup>
    <FormGroup>
        <Label for="username_distributor">username Pengguna</Label>
        <Input type="text" name="username_distributor" id="username_distributor" placeholder="Masukkan username distributor anda" />
    </FormGroup>
    <FormGroup>
        <Label for="email_distributor">Email</Label>
        <Input type="email" name="email_distributor" id="email_distributor" placeholder="Masukkan email distributor anda" />
    </FormGroup>
    <FormGroup>
        <Label for="no_hp_distributor">Nomor Telepon/HP</Label>
        <Input type="text" name="no_hp_distributor" id="no_hp_distributor" placeholder="Masukkan nomor handphone distributor anda" />
    </FormGroup>
    <FormGroup>
        <Label for="deskripsi_distributor">Deskripsi</Label>
        <Input type="textarea" name="deskripsi_distributor" id="deskripsi_distributor" />
    </FormGroup>
    <FormGroup>
        <Label for="catatan_distributor">Catatan</Label>
        <Input type="textarea" name="catatan_distributor" id="catatan_distributor" />
    </FormGroup>
   
    <CardFooter className="clearfix">
        <input type="submit" value="simpan" className="btn btn-primary float-right"/>
        <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right"/>
    </CardFooter>
</Form>
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

 
export  {InputForm,InputFormPhoto_KTP,InputFormPhoto_Profile};