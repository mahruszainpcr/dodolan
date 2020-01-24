import React, { Component } from 'react'
import { Card, CardBody,Form, FormGroup, CardFooter, Label, Input, CardHeader, CardText, Button} from 'reactstrap'


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
    state = {  }
    render() { 
        return ( 
            <FormGroup>
            <Label for="nama_kategori">Pilih Kategori</Label>
            <Input type="select" name="nama_kategori" id="nama_kategori">
            <option>Kategori 1</option>
            <option>Kategori 2</option>
            <option>Kategori 3</option>
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
    state = {  }
    render() { 
        return ( 
            <FormGroup>
            <Label for="nama_brand">Pilih Brand</Label>
            <Input type="select" name="nama_brand" id="nama_brand">
            <option>Brand 1</option>
            <option>Brand 2</option>
            <option>Brand 3</option>
            </Input>
        </FormGroup>
         );
    }
}
class SelectSatuan extends Component {
    state = {  }
    render() { 
        return ( 
            <FormGroup>
            <Label for="nama_satuan">Pilih Satuan</Label>
            <Input type="select" name="nama_satuan" id="nama_satuan">
            <option>Satuan 1</option>
            <option>Satuan 2</option>
            <option>Satuan 3</option>
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
            <Label for="nama_kelas_pasaran">Pilih KelasPasaran</Label>
            <Input type="select" name="nama_kelas_pasaran" id="nama_kelas_pasaran">
            <option>Kelas Pasaran 1</option>
            <option>Kelas Pasaran 2</option>
            <option>Kelas Pasaran 3</option>
            </Input>
        </FormGroup>
         );
    }
}



export {SelectAll, SelectDistributor, SelectKategori,SelectRetail,SelectSubKategori,SelectSubSubKategori, SelectBrand, SelectSatuan,SelectKelasPasaran};