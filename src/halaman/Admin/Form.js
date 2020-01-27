import React, { Component } from 'react'
import { Card, CardBody, Form, FormGroup, CardFooter, Label, Input, CardHeader, CardText, Button } from 'reactstrap'
import { SelectKategori, SelectSubKategori, SelectSubSubKategori } from '../reuse/Select'
import { SubJudul } from '../reuse/Typografi'
import swal from 'sweetalert2';
const axios = require('axios');

class Utilitas extends Component {

    constructor(props) {
        super(props);
        this.state = { nama_produk_brand: '' ,alert: null};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ nama_produk_brand: event.target.value });
    }

    handleSubmit = () => {
        axios.post('http://localhost:3006/api/brand', {
            nama_produk_brand: this.state.nama_produk_brand
          })
          .then(function (response) {
            if (response.data.status === 200) {
                swal.fire({
                    icon: 'success',
                    title: 'Data Tersimpan',
                    showConfirmButton: false,
                    timer: 1500
                  }
                  )
            }else{
                swal.fire({
                    icon: 'error',
                    title: 'Data Tidak Tersimpan',
                    showConfirmButton: false,
                    timer: 1500
                  }
                  )
            } 
          })
          .catch(function (error) {
            console.log(error);
            swal.fire({
                icon: 'error',
                title: 'Data Tidak Tersimpan',
                showConfirmButton: false,
                timer: 1500
              }
              )
          });
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <Card>
                        <CardHeader><SubJudul name="Brand" />
                        </CardHeader>
                        <CardBody className="card-block">
                            <CardText className="text-muted">Fitur ini disediakan untuk menambahkan Brand terbaru</CardText>

                            <div className="clone-link mt-2">
                                <div className="toclone">
                                    <button className=" delete  btn btn-danger m-b-15"><i
                                        class="icofont icofont-minus"></i></button>
                                    <button className=" clone btn btn-primary m-b-15"><i class="icofont icofont-plus"></i></button>
                                    <div className="j-row">
                                        <div className="span6 unit">
                                            <div className="input">
                                            <FormGroup>
                                            <Label for="nama_produk_brand">Nama Brand Produk</Label>
                                            <input type="text" value={this.state.nama_produk_brand} onChange={this.handleChange} className="form-control form-control-capitalize"/>
                                            </FormGroup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CardFooter className="clearfix">
                                <input type="submit" value="simpan" onClick={this.handleSubmit} className="btn btn-primary float-right" />
                                <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right" />
     
                            </CardFooter>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-4">
                    <Card>
                        <CardHeader>
                            <SubJudul name="Kualitas Pasaran" />
                        </CardHeader>
                        <CardBody className="card-block">
                            <CardText className="text-muted">Fitur ini disediakan untuk menambahkan Kualitas Pasaran terbaru</CardText>

                            <div className="clone-link mt-2">
                                <div className="toclone">
                                    <button className=" delete  btn btn-danger m-b-15"><i
                                        class="icofont icofont-minus"></i></button>
                                    <button className=" clone btn btn-primary m-b-15"><i class="icofont icofont-plus"></i></button>
                                    <div className="j-row">
                                        <div className="span6 unit">
                                            <div className="input">
                                                <InputText name="Nama Kualitas Pasaran" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CardFooter className="clearfix">
                                <input type="submit" value="simpan" className="btn btn-primary float-right" />
                                <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right" />
                            </CardFooter>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-4">
                    <Card>
                        <CardHeader><SubJudul name="Satuan" />
                        </CardHeader>
                        <CardBody className="card-block">
                            <CardText className="text-muted">Fitur ini disediakan untuk menambahkan Satuan terbaru</CardText>

                            <div className="clone-link mt-2">
                                <div className="toclone">
                                    <button className=" delete  btn btn-danger m-b-15"><i
                                        class="icofont icofont-minus"></i></button>
                                    <button className=" clone btn btn-primary m-b-15"><i class="icofont icofont-plus"></i></button>
                                    <div className="j-row">
                                        <div className="span6 unit">
                                            <div className="input">
                                                <InputText name="Nama Satuan" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CardFooter className="clearfix">
                                <input type="submit" value="simpan" className="btn btn-primary float-right" />
                                <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right" />
                            </CardFooter>
                        </CardBody>
                    </Card>
                </div>


                <div className="col-4">
                    <Card>
                        <CardHeader><SubJudul name="Kategori" />
                        </CardHeader>
                        <CardBody className="card-block">
                            <CardText className="text-muted">Fitur ini disediakan untuk menambahkan Kategori terbaru</CardText>

                            <div className="clone-link mt-2">
                                <div className="toclone">
                                    <button className=" delete  btn btn-danger m-b-15"><i
                                        class="icofont icofont-minus"></i></button>
                                    <button className=" clone btn btn-primary m-b-15"><i class="icofont icofont-plus"></i></button>
                                    <div className="j-row">
                                        <div className="span6 unit">
                                            <div className="input">
                                                <InputText name="Nama Kategori" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CardFooter className="clearfix">
                                <input type="submit" value="simpan" className="btn btn-primary float-right" />
                                <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right" />
                            </CardFooter>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-4">
                    <Card>
                        <CardHeader><SubJudul name="Sub Kategori" />
                        </CardHeader>
                        <CardBody className="card-block">
                            <CardText className="text-muted">Fitur ini disediakan untuk menambahkan Sub Kategori terbaru</CardText>
                            <div className="clone-link mt-2">
                                <div className="toclone">
                                    <button className=" delete  btn btn-danger m-b-15"><i
                                        class="icofont icofont-minus"></i></button>
                                    <button className=" clone btn btn-primary m-b-15"><i class="icofont icofont-plus"></i></button>
                                    <div className="j-row">
                                        <div className="span6 unit">
                                            <SelectKategori />

                                            <div className="input">
                                                <InputText name="Nama Sub Kategori" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CardFooter className="clearfix">
                                <input type="submit" value="simpan" className="btn btn-primary float-right" />
                                <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right" />
                            </CardFooter>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-4">
                    <Card>
                        <CardHeader><SubJudul name="Sub Sub Kategori" />
                        </CardHeader>
                        <CardBody className="card-block">
                            <CardText className="text-muted">Fitur ini disediakan untuk menambahkan Sub Sub Kategori terbaru</CardText>

                            <div className="clone-link mt-2">
                                <div className="toclone">
                                    <button className=" delete  btn btn-danger m-b-15"><i
                                        class="icofont icofont-minus"></i></button>
                                    <button className=" clone btn btn-primary m-b-15"><i class="icofont icofont-plus"></i></button>
                                    <div className="j-row">
                                        <div className="span6 unit">
                                            <div className="input">
                                                <SelectKategori />
                                                <SelectSubSubKategori />
                                                <InputText name="Nama Sub Sub Kategori" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CardFooter className="clearfix">
                                <input type="submit" value="simpan" className="btn btn-primary float-right" />
                                <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right" />
                            </CardFooter>
                        </CardBody>
                    </Card>
                </div>
            </div>

        );
    }
}
class InputNum extends Component {
    state = {}
    render() {
        return (
            <FormGroup>

                <input type="number" name={this.props.name} placeholder="ex.1212" className="form-control" />
            </FormGroup>
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
                <input type="text" name={this.props.id} id={this.props.id} placeholder={"Masukkan " + this.props.name + " baru"}
                    className="form-control form-control-capitalize" />
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



export default Utilitas;