import React, { Component } from 'react';

import { InputForm, InputFormPhoto } from './Form'
import {SelectDistributor} from '../Distributor/Form'
import {Card, CardBody, CardHeader, CardTitle, Container, FormGroup, Label} from 'reactstrap'
import { SelectProduk, SelectSatuan } from '../reuse/Select';

class InputProductJual extends Component {
state = { }
render() {
return (
<Container>
    <Card className="p-5">
        <CardTitle>
            <h3 className="sub-title">Form Penambahan Varian Produk</h3>
        </CardTitle>
        <CardBody>
            <div className="row">
             <div className="col">
                 <SelectProduk/>
             </div>
            </div>
            <div className="row">
                <div className="col-4">
               <div className="row">
                   <div className="col-6">
                   <FormGroup>
                    <Label for="warna">Warna</Label>
                    <input type="text" id="warna" className="form-control demo minicolors-input" defaultValue="#70c24a" size={7} />
                    </FormGroup>
                   </div>
                   <div className="col-6">
                       <InputText id="kode_warna" name="Kode Warna" pc="ET-20"/>
                   </div>
               </div>
                </div>
                <div className="col-4">
                    {/* <InputText id="id_ukuran" name="Ukuran" pc="ex: cm, m, L" /> */}
                    <SelectSatuan/>
                </div>
                <div className="col-4">
                    <InputNum id="stok" name="Stock" pc="ex: 1000"/>
                </div>
            </div>
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
        </CardBody>
    </Card>
</Container>
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
                <input type="text" name={this.props.id} id={this.props.id} placeholder={this.props.pc}
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
                <input type="number" name={this.props.id} id={this.props.id} placeholder={this.props.pc}
                    className="form-control form-control-capitalize" />
            </FormGroup>
        );
    }
}

export default InputProductJual;