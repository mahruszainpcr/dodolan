import React, {Component} from 'react'
import { Card, CardHeader, Form, FormGroup, Label, Input, FormText, Button, CardFooter} from 'reactstrap'

class InputForm extends Component {
state = { }
render() {
return (
<Form>
    <FormGroup>
        <Label for="nama_produk">Nama Produk</Label>
        <Input type="text" name="nama_produk" id="nama_produk" placeholder="Masukkan nama Produk anda" />
    </FormGroup>
    <FormGroup>
        <Label for="deskripsi_produk">Deskripsi Produk</Label>
        <Input type="textarea" name="deskripsi_produk" id="deskripsi_produk" />
    </FormGroup>
    <FormGroup>
        <div className="row">
            <div className="col-4">
                <Label for="harga_dalam_produk">Harga Dalam Kota</Label>
                <Input type="number" name="harga_dalam_produk" id="harga_dalam_produk" placeholder="" />
            </div>
            <div className="col-4">
                <Label for="harga_luar_produk">Harga Luar Kota</Label>
                <Input type="number" name="harga_luar_produk" id="harga_luar_produk" placeholder="" />
            </div>
            <div className="col-4">
                <Label for="harga_pulau_produk">Harga Luar Pulau</Label>
                <Input type="number" name="harga_pulau_produk" id="harga_pulau_produk" placeholder="" />
            </div>
        </div>
    </FormGroup>
    <FormGroup>
        <Label for="id_kelas_pasaran">Kelas Pasaran</Label>
        <Input type="select" name="id_kelas_pasaran" id="id_kelas_pasaran">
        <option>Kelas 1</option>
        <option>Kelas 2</option>
        <option>Kelas 3</option>
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="id_sub_sub_kategori">Sub Kategori</Label>
        <Input type="select" name="id_sub_sub_kategori" id="id_sub_sub_kategori">
        <option>Bahan Bangunan</option>
        <option>Besi</option>
        <option>Kayu</option>
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="id_brand">Brand</Label>
        <Input type="select" name="id_brand" id="id_brand">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="id_satuan">Satuan</Label>
        <Input type="select" name="id_satuan" id="id_satuan">
        <option>Koli</option>
        <option>Box</option>
        <option>Truk</option>
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="id_warna">Warna</Label>
        <input type="text" id="id_warna" className="form-control demo" defaultValue="#70c24a" />
    </FormGroup>
   
    <CardFooter className="clearfix">
        <input type="submit" value="simpan" className="btn btn-primary float-right"/>
        <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right"/>
    </CardFooter>
</Form>
);
}
}

class InputFormPhoto extends Component {
    state = {  }
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
 
export  {InputForm,InputFormPhoto};