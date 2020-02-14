import React, { Component} from 'react'
import {FormStock} from '../reuse/Form'
import { Card, CardHeader, CardBody} from 'reactstrap'
import {PageJudul} from '../reuse/Page'

export default class Stock extends Component {
    render(

    ) {
    
    return (
        <div>
  <PageJudul title="Form Penambahan Stock" deskripsiPage="Form yang dapat menambah stok barang anda dengan mudah dan praktis." />

        <Card>
            {/* <CardHeader>
                <h2 className="title">Form Penambahan Stock</h2>
            </CardHeader> */}
            <CardBody>
            <div className="row container">
                                    <div className="col-md-4">
                                        <Input label="Nama Pabrik" name="nama_pabrik_produk_stock" type="text" />
                                    </div>
                                    <div className="col-md-4">
                                        <Input label="No Faktur" name="no_faktur_produk_stock" type="number" />
                                    </div>
                                    <div className="col-md-4">
                                        <InputTanggal label="Tanggal" name="tanggal_produk_stock" />
                                    </div>
                                </div>
                                    <App/>
                                    
            <div className="row">
              <div className="col-md-9 .ml-md-auto"></div>
              <div className="col-md-3 .ml-md-auto">
                                        <button type="button" class="btn btn-secondary mr-3">Batal</button>
                                        <button type="button" class="btn btn-primary">Simpan</button>
                                    </div>
                                    </div>
            </CardBody>
            
        </Card>
        </div>
       
    )
    }
    }
    const {useState, useCallback, Fragment} = React

// The added element component
const AddedElement = () => <FormStock/>

// The parent component
const App = () => {
  const [count, setCount] = useState(0) 

  return <Fragment>
    {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    <button onClick={() => setCount(count + 1)} class="btn btn-success btn-inline mb-3"><i class="icofont icofont-ui-add"></i>Tambah Stock</button>
    { Array(count).fill(<AddedElement />) }
  </Fragment>
}


class Input extends Component {
  state = { }
  render() {
  return (
  <div>
      <label> {this.props.label} </label>
      <input type={this.props.type} name={this.props.name} id={this.props.name} className="form-control form-control-capitalize" />
  </div>
  );
  }
  }
  
  class InputTanggal extends Component {
  state = { }
  render() {
  return (
  <div>
      <label> {this.props.label} </label>
  
      <input id="dropper-animation" className="form-control" type="date" placeholder="Klik kolom ini"></input>
  </div>
  );
  }
  }
  