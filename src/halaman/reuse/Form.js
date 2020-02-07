import React, {Component} from 'react'
import { SelectKelasPasaran, SelectBrand, SelectSatuan, SelectProduk, SelectProdukJual } from './Select'
import { Card, CardHeader, Form, FormGroup, Label, FormText, Button, CardFooter } from 'reactstrap'
import { SelectProduct } from '../Produk/Form'



class FormStock extends Component {
state = { }
render() {
return (

<div className="row">
    <div className="col">
        <div className="card shadow-lg ">
            <div className="card-block">
                <div className="row">
                    <div className="col-md-12">
                        <section>

                            <div className="row mt-3 container">
                                <div className="col-md-6">
                                    <SelectProduk />
                                </div>
                                <div className="col-md-6">
                                    {/* <Input label="Stock" name="stockProduk" type="number" /> */}
                                    <SelectProdukJual />
                                </div>
                            </div>
                            <div className="row mt-3 container">
                                <div className="col-md-6">
                                    <Input label="Jumlah" name="jumlah" type="number" />
                                </div>
                                <div className="col-md-6">
                                    <Input label="Harga Pembelian" name="harga_pembelian" type="number" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

);
}
}
class FormPromosi extends Component {
state = { }
render() {
return (

<div className="row">
    <div className="col">
        <div className="card shadow-lg ">
            <div className="card-block">
                <div className="row">
                    <div className="col-md-12">
                        <section>

                            <div className="row mt-3 container">
                                <div className="col-md-12">
                                    <SelectProduk />
                                </div>
                                <div className="col-md-12">
                                    <InputNum name="jumlah" nama="Jumlah" />
                                </div>
                            </div>
                            
                        </section>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
);
}
}
class FormBonus extends Component {
state = { }
render() {
return (

<div className="row">
    <div className="col">
        <div className="card shadow-lg">
            <div className="card-block">
                <div className="row">
                    <div className="col-md-12">
                        <section>
                      <ul className="nav nav-tabs md-tabs" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" data-toggle="tab" href="#home3" role="tab">Produk Jual</a>
    <div className="slide" />
  </li>
  <li className="nav-item">
    <a className="nav-link" data-toggle="tab" href="#profile3" role="tab">Non-Produk Jual</a>
    <div className="slide" />
  </li>
</ul>
{/* tab */}
<div class="tab-content card-block">
                                                                    <div class="tab-pane active" id="home3" role="tabpanel">
                                                                        <p class="m-0">
                                                                            <SelectProduk/>
                                                                            <InputNum nama="Jumlah" name="jumlah"/>
                                                                        </p>
                                                                    </div>
                                                                    <div class="tab-pane" id="profile3" role="tabpanel">
                                                                        <p class="m-0"><Input label="Non-Produk" name="bonus" type="text" placeholder="Emas"/>
                                                                        <InputNum nama="Jumlah" name="jumlah"/>
                                                                        </p>
                                                                    </div>
                                                                  
                                                                </div>

                            
                        </section>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
);
}
}




class Input extends Component {
state = { }
render() {
return (
<div>
    <label> {this.props.label} </label>
    <input type={this.props.type} name={this.props.name} id={this.props.name}
        className="form-control form-control-capitalize" />
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

class InputNum extends Component {
    state = { }
    render() {
    return (
    <FormGroup>
    <Label for={this.props.name}>{this.props.nama}</Label>
        <input type="number" id={this.props.name} name={this.props.name} placeholder="ex.1212" className="form-control" />
    </FormGroup>
    );
    }
    }
    


class InputSelect extends Component {
state = { }
render() {
return (
<div>
    <label> {this.props.label} </label>
    <select name={this.props.name} class="form-control form-control">
        <option value="opt1">Select One Value Only</option>
        <option value="opt2">Type 2</option>
        <option value="opt3">Type 3</option>
        <option value="opt4">Type 4</option>
        <option value="opt5">Type 5</option>
        <option value="opt6">Type 6</option>
        <option value="opt7">Type 7</option>
        <option value="opt8">Type 8</option>
    </select>

</div>
);
}
}



export {FormStock, Input, InputSelect, InputTanggal,FormPromosi,FormBonus};