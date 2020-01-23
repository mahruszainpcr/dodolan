import React, {Component} from 'react'
import { Card, CardHeader, Form, FormGroup, Label, Input, FormText, Button, CardFooter} from 'reactstrap'

class InputForm extends Component {
state = { }
render() {
return (
<Form>

    <InputText id="nama_produk" name="Nama Produk" placeholder="Masukkan nama produk anda" />
    <InputTextArea id="deskripsi_produk" name="Deskripsi Produk" placeholder="Masukkan deskripsi produk anda" />

    <FormGroup>
        <div className="row">
            <div className="col-4">
                <InputNum id="harga_dalam_produk" name="Harga Dalam Kota" />
            </div>
            <div className="col-4">
                <InputNum id="harga_luar_produk" name="Harga Luar Kota" />
            </div>
            <div className="col-4">
                <InputNum id="harga_pulau_produk" name="Harga Luar Pulau" />
            </div>
        </div>
    </FormGroup>
    <InputSelect id="id_kelas_pasaran" name="Pilih Kelas Pasaran" />
    <FormGroup>
        <div className="row">
            <div className="col-4">
                <InputSelect id="id_kategori" name="Pilih Kategori" />

            </div>
            <div className="col-4">
                <InputSelect id="id_sub_kategori" name="Pilih Sub Kategori" />

            </div>
            <div className="col-4">
                <InputSelect id="id_sub_sub_kategori" name="Pilih Sub Sub Kategori" />

            </div>
        </div>
    </FormGroup>
    <InputSelect id="id_brand" name="Pilih Brand" />
    <InputSelect id="id_satuan" name="Pilih Satuan" />

    <FormGroup>
        <Label for="id_warna">Warna</Label>
        <input type="text" id="id_warna" className="form-control demo" defaultValue="#70c24a" />
    </FormGroup>

    <CardFooter className="clearfix">
        <input type="submit" value="simpan" className="btn btn-primary float-right" />
        <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right" />
    </CardFooter>
</Form>
);
}
}

class InputFormPhoto extends Component {
state = { }
render() {
return (
<Form>
    <FormGroup>
        <Label for="filer_input1">Silahkan Masukkan Photo Produk Anda</Label>
        <input type="file" name="files[]" id="filer_input1" multiple="multiple" />
    </FormGroup>
</Form>
);
}
}
class SelectProduct extends Component {
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

class InputFormPhoto_KTP extends Component {
state = { }
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
state = { }
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
state = { }
render()

{
// const props = this.props;
return (
<FormGroup>
    <Label for={this.props.id}>{this.props.name}</Label>
    <input type="text" name={this.props.id} id={this.props.id} placeholder={this.props.placeholder}
        className="form-control form-control-capitalize" />
</FormGroup>
);
}
}
class InputNum extends Component {
state = { }
render()

{
// const props = this.props;
return (
<FormGroup>
    <Label for={this.props.id}>{this.props.name}</Label>
    <input type="number" name={this.props.id} id={this.props.id} placeholder={this.props.placeholder}
        className="form-control" />
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
    <textarea name={this.props.id} id={this.props.id} placeholder={this.props.placeholder} className="form-control" />
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
 
export  {InputForm,InputFormPhoto,SelectProduct};