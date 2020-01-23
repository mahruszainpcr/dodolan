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
            <Label for="nama_sub_kategori">Pilih SubKategori</Label>
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
            <Label for="nama_sub_sub_kategori">Pilih SubKategori</Label>
            <Input type="select" name="nama_sub_sub_kategori" id="nama_sub_sub_kategori">
            <option>SubSubKategori 1</option>
            <option>SubSubKategori 2</option>
            <option>SubSubKategori 3</option>
            </Input>
        </FormGroup>
         );
    }
}



export {SelectAll, SelectDistributor, SelectKategori,SelectRetail,SelectSubKategori,SelectSubSubKategori};