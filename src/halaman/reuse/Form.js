import React, {Component} from 'react'


class FormStock extends Component {
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
                                <div className="row container">
                                    <div className="col-md-4">
                                        <Input label="Nama Pabrik" name="namaPabrik" type="text" />
                                    </div>
                                    <div className="col-md-4">
                                        <Input label="No Invoice" name="noInvoice" type="number" />
                                    </div>
                                    <div className="col-md-4">
                                        <InputTanggal label="Tanggal" />
                                    </div>
                                </div>
                                <div className="row mt-3 container">
                                    <div className="col-md-4">
                                        <InputSelect label="Nama Produk" name="namaProduk" />
                                    </div>
                                    <div className="col-md-4">
                                        <Input label="Stock" name="stockProduk" type="number" />
                                    </div>
                                    <div className="col-md-4">
                                      
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



export {FormStock, Input, InputSelect, InputTanggal};