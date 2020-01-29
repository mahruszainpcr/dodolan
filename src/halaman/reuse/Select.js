import React, { Component } from 'react'
import { Card, CardBody,Form, FormGroup, CardFooter, Label, Input, CardHeader, CardText, Button} from 'reactstrap'


var alamat_backend=require('./../../component/Variable');
class SelectAll extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

            </div>
         );
    }
}
 class SelectDistributor extends Component {
    state = {  }
    render() { 
        return ( 
            <FormGroup>
            <Label for="nama_distributor">Pilih Distributor</Label>
            <Input type="select" name="nama_distributor" id="nama_distributor">
            <option>Distributor 1</option>
            <option>Distributor 2</option>
            <option>Distributor 3</option>
            </Input>
        </FormGroup>
         );
    }
}
class SelectRetail extends Component {
    state = {  }
    render() { 
        return ( 
            <FormGroup>
            <Label for="nama_retail">Pilih Retail</Label>
            <Input type="select" name="nama_retail" id="nama_retail">
            <option>Retail 1</option>
            <option>Retail 2</option>
            <option>Retail 3</option>
            </Input>
        </FormGroup>
         );
    }
}
class SelectKategori extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataKategori: []
        }
    }
    
    componentDidMount() {
        let self = this;
        fetch(alamat_backend+'kategori_produk', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({dataKategori: data.values});
        }).catch(err => {
        console.log('caught it!',err);
        })
    }
    render() { 
        return ( 
            <FormGroup>
            <Label for="nama_kategori">Pilih Kategori</Label>
            <Input type="select" name="id_produk_kategori" id="id_produk_kategori">
            {this.state.dataKategori.map(member =>
            <option value={member.id_produk_kategori}>{member.nama_produk_kategori}</option>
            )}
            </Input>
        </FormGroup>
         );
    }
}

class SelectSubKategori extends Component {
    state = {  }
    render() { 
        return ( 
            <FormGroup>
            <Label for="nama_sub_kategori">Pilih Sub Kategori</Label>
            <Input type="select" name="nama_sub_kategori" id="nama_sub_kategori">
            <option>SubKategori 1</option>
            <option>SubKategori 2</option>
            <option>SubKategori 3</option>
            </Input>
        </FormGroup>
         );
    }
}
class SelectSubSubKategori extends Component {
    state = {  }
    render() { 
        return ( 
            <FormGroup>
            <Label for="nama_sub_sub_kategori">Pilih Sub Sub Kategori</Label>
            <Input type="select" name="nama_sub_sub_kategori" id="nama_sub_sub_kategori">
            <option>SubSubKategori 1</option>
            <option>SubSubKategori 2</option>
            <option>SubSubKategori 3</option>
            </Input>
        </FormGroup>
         );
    }
}

class SelectBrand extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataBrand: []
        }
    }
    
    componentDidMount() {
        let self = this;
        fetch(alamat_backend+'brand', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({dataBrand: data.values});
        }).catch(err => {
        console.log('caught it!',err);
        })
    }
    render() { 
        return ( 
            <FormGroup>
            <Label for="nama_brand">Pilih Brand</Label>
            <Input type="select" name="nama_brand" id="nama_brand">
            {this.state.dataBrand.map(member =>
            <option value={member.id_produk_brand}>{member.nama_produk_brand}</option>
            )}
            </Input>
        </FormGroup>
         );
    }
}
class SelectSatuan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSatuan: []
        }
    }
    
    componentDidMount() {
        let self = this;
        fetch(alamat_backend+'produk_satuan', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({dataSatuan: data.values});
        }).catch(err => {
        console.log('caught it!',err);
        })
    }
    render() { 
        return ( 
            <FormGroup>
            <Label for="nama_satuan">Pilih Satuan</Label>
            <Input type="select" name="nama_satuan" id="nama_satuan">
            {this.state.dataSatuan.map(member =>
            <option value={member.id_produk_satuan}>{member.nama_produk_satuan}</option>
            )}
            </Input>
        </FormGroup>
         );
    }
}
class SelectKelasPasaran extends Component {
    state = {  }
    render() { 
        return ( 
            <FormGroup>
            <Label for="nama_kelas_pasaran">Pilih Kelas Pasaran</Label>
            <Input type="select" name="nama_kelas_pasaran" id="nama_kelas_pasaran">
            <option>Kelas Pasaran 1</option>
            <option>Kelas Pasaran 2</option>
            <option>Kelas Pasaran 3</option>
            </Input>
        </FormGroup>
         );
    }
}

class SelectProduk extends Component {
    state = {  }
    render() { 
        return ( 
            <FormGroup>
            <Label for="nama_produk">Pilih Produk</Label>
            <Input type="select" name="nama_produk" id="nama_produk">
            <option>Produk 1</option>
            <option>Produk 2</option>
            <option>Produk 3</option>
            </Input>
        </FormGroup>
         );
    }
}
class SelectPromosi extends Component {
    state = {  }
    render() { 
        return ( 
            <FormGroup>
            <Label for="nama_promosi">Pilih Promosi</Label>
            <Input type="select" name="nama_promosi" id="nama_promosi">
            <option>Promosi 1</option>
            <option>Promosi 2</option>
            <option>Promosi 3</option>
            </Input>
        </FormGroup>
         );
    }
}

export {SelectAll, SelectDistributor, SelectKategori,SelectRetail,SelectSubKategori,SelectSubSubKategori, SelectBrand, SelectSatuan,SelectKelasPasaran, SelectPromosi,SelectProduk};