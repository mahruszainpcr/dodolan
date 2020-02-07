import React, { Component } from 'react'
import { Card, CardHeader, Form, FormGroup, Label, Input, FormText, Button, CardFooter } from 'reactstrap'
import { SelectKelasPasaran, SelectKategori, SelectSubKategori, SelectSubSubKategori, SelectBrand, SelectSatuan,SelectTOP } from '../reuse/Select'
const axios = require("axios");
var alamat_backend=require('./../../component/Variable');
class InputForm extends Component {
    state = {}
    render() {
        return (
            <Form>
                <InputText id="nama_produk" name="Nama Produk" placeholder="Masukkan nama produk anda" />
                <InputTextArea id="deskripsi_produk" name="Deskripsi Produk" placeholder="Masukkan deskripsi produk anda" />
                <div className="row">
                    <div className="col-4">
                    <SelectKelasPasaran/>
                    </div>
                    <div className="col-4">
                        <SelectBrand/>
                    </div>
                    <div className="col-4">
                        <SelectTOP/>
                    </div>
                </div>
                <FormGroup>
                    <div className="row">
                        <div className="col-4">
                            <SelectKategori />

                        </div>
                        <div className="col-4">
                            <SelectSubKategori />

                        </div>
                        <div className="col-4">
                            <SelectSubSubKategori />

                        </div>
                    </div>
                </FormGroup>
               

                <CardFooter className="clearfix">
                    <input type="submit" value="simpan" className="btn btn-primary float-right" />
                    <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right" />
                </CardFooter>
            </Form>
        );
    }
}
class InputProdukJual extends Component {
    state = {  }
    render() { 
        return ( 
            <Form>
            <InputText id="nama_produk" name="Nama Produk" placeholder="Masukkan nama produk anda" />
            <InputTextArea id="deskripsi_produk" name="Deskripsi Produk" placeholder="Masukkan deskripsi produk anda" />
            <div className="row">
                <div className="col-4">
                <SelectKelasPasaran/>
                </div>
                <div className="col-4">
                    <SelectBrand/>
                </div>
                <div className="col-4">
                    <SelectTOP/>
                </div>
            </div>
            <FormGroup>
                <div className="row">
                    <div className="col-4">
                        <SelectKategori />

                    </div>
                    <div className="col-4">
                        <SelectSubKategori />

                    </div>
                    <div className="col-4">
                        <SelectSubSubKategori />

                    </div>
                </div>
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
    
    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post(alamat_backend+"upload",formData,config)
            .then((response) => {
                console.log(response);
                // alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
            <h1>File Upload</h1>
            <input type="file" name="myImage" id="filer_input1" onChange= {this.onChange} />
            {/* <input type="file" name="myImage" onChange= {this.onChange}  /> */}
            <button className="btn btn-success float-right mr-2" type="submit">Upload Foto</button>
        </form>
        );
    }
}


class InputFormPhoto_KTP extends Component {
    state = {}
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
    state = {}
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
    state = {}
    render() {
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
    state = {}
    render() {
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
    state = {}
    render() {
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
    state = {}
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

export { InputForm, InputFormPhoto };