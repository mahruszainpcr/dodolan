import React, { Component } from 'react'
import { Card, CardBody, Form, FormGroup, CardFooter, Label, Input, CardHeader, CardText, Button } from 'reactstrap'
import { SelectKategori, SelectSubKategori, SelectSubSubKategori } from '../reuse/Select'
import { SubJudul } from '../reuse/Typografi'
import swal from 'sweetalert2';
const axios = require('axios');
var alamat_backend=require('./../../component/Variable');

class Uti_Brand extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama_produk_brand: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitBrand = this.handleSubmitBrand.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});  }
        
        handleSubmitBrand = () => {
            axios.post(alamat_backend+'brand', {
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
                                            <input type="text" value={this.state.nama_produk_brand} onChange={this.handleChange} name="nama_produk_brand" className="form-control form-control-capitalize"/>
                                            </FormGroup>
                                            <SelectSubSubKategori/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CardFooter className="clearfix">
                                <input type="submit" value="simpan" onClick={this.handleSubmitBrand} className="btn btn-primary float-right" />
                                <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right" />
     
                            </CardFooter>
                        </CardBody>
                    </Card>
         );
    }
}


class Uti_Kualitas_Pasaran extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama_kualitas_pasaran: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});  }
        
        handleSubmitKualitasPasaran= () =>{
            axios.post(alamat_backend+'kualitas_pasaran', {
                nama_kualitas_pasaran: this.state.nama_kualitas_pasaran
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
                                            <Label for="nama_produk_brand">Kualitas Pasaran</Label>
                                            <input type="text" value={this.state.nama_kualitas_pasaran} onChange={this.handleChange} name="nama_kualitas_pasaran" className="form-control form-control-capitalize"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CardFooter className="clearfix">
                                <input type="submit" value="simpan" onClick={this.handleSubmitKualitasPasaran} className="btn btn-primary float-right" />
                                <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right" />
                            </CardFooter>
                        </CardBody>
                    </Card>
         );
    }
}


class Uti_Satuan_Produk extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama_produk_satuan: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});  }
        
        handleSubmitSatuanProduk = () =>{
            axios.post(alamat_backend+'produk_satuan', {
                nama_produk_satuan: this.state.nama_produk_satuan
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
            <Card>
            <CardHeader><SubJudul name="Ukuran" />
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
                                    <Label for="nama_produk_brand">Nama Satuan</Label>
                                    
                                    <input type="text" value={this.state.nama_produk_satuan} onChange={this.handleChange} name="nama_produk_satuan" className="form-control form-control-capitalize"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CardFooter className="clearfix">
                    <input type="submit" value="simpan" onClick={this.handleSubmitSatuanProduk}  className="btn btn-primary float-right" />
                    <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right" />
                </CardFooter>
            </CardBody>
        </Card>
         );
    }
}

class Uti_Warna extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama_produk_warna: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});  }
        
        handleSubmitSatuanProduk = () =>{
            axios.post(alamat_backend+'produk_warna', {
                nama_produk_warna: this.state.nama_produk_warna
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
            <Card>
            <CardHeader><SubJudul name="Warna" />
            </CardHeader>
            <CardBody className="card-block">
                <CardText className="text-muted">Fitur ini disediakan untuk menambahkan Warna terbaru</CardText>

                <div className="clone-link mt-2">
                    <div className="toclone">
                        <button className=" delete  btn btn-danger m-b-15"><i
                            class="icofont icofont-minus"></i></button>
                        <button className=" clone btn btn-primary m-b-15"><i class="icofont icofont-plus"></i></button>
                        <div className="j-row">
                            <div className="span6 unit">
                                <div className="input">
                                    <Label for="nama_produk_brand">Nama Warna</Label>
                                    
                                    <input type="text" value={this.state.nama_produk_warna} onChange={this.handleChange} name="nama_produk_warna" className="form-control form-control-capitalize"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CardFooter className="clearfix">
                    <input type="submit" value="simpan" onClick={this.handleSubmitSatuanProduk}  className="btn btn-primary float-right" />
                    <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right" />
                </CardFooter>
            </CardBody>
        </Card>
         );
    }
}
 
class Uti_Kategori_Produk extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama_produk_kategori: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});  }
        
    handleSubmitKategoriProduk = () =>{
        axios.post(alamat_backend+'kategori_produk', {
            nama_produk_kategori: this.state.nama_produk_kategori
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
                                <Label for="nama_produk_brand">Kategori Produk</Label>
                                    
                                    <input type="text" value={this.state.nama_produk_kategori} onChange={this.handleChange} name="nama_produk_kategori" className="form-control form-control-capitalize"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CardFooter className="clearfix">
                    <input type="submit" value="simpan" onClick={this.handleSubmitKategoriProduk}  className="btn btn-primary float-right" />
                    <input type="submit" value="batal" className="btn btn-secondary mr-2 float-right" />
                </CardFooter>
            </CardBody>
        </Card>
            );
    }
}
class Uti_Sub_Kategori_Produk extends Component {
    state = {  }
    render() { 
        return ( 
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
         );
    }
}
class Uti_Sub_Sub_Kategori_Produk extends Component {
    state = {  }
    render() { 
        return ( 
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
         );
    }
}
 


class Utilitas extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            nama_produk_brand: '' ,
            nama_kualitas_pasaran: '',
            nama_produk_satuan:'',
            nama_produk_kategori:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitBrand = this.handleSubmitBrand.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }
   
    
    render() {
        return (
<div></div>
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



export {Utilitas,Uti_Brand,Uti_Kualitas_Pasaran,Uti_Kategori_Produk,Uti_Satuan_Produk,Uti_Sub_Kategori_Produk,Uti_Sub_Sub_Kategori_Produk,Uti_Warna};