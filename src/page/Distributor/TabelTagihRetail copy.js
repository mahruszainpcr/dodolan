import React, { Component } from 'react'
import SweetAlert from 'sweetalert2-react';




export default class TabelTagihRetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          show: false,
        };}
render() {
return (
<div>

    <div>
      
                    <div className="card">
                        <div className="card-header">
                            <h5>Data Penagihan ke Retail</h5>
                            <span>
                                Data dibawah ini menyajikan list dari retail yang akan diproses penagihan.
                            </span>

                        </div>
                        <div className="card-block">
                            <div className="dt-responsive table-responsive">
                                <table id="multi-select" className="table table-striped table-bordered nowrap">
                                    <thead>
                                        <tr>
                                            <th>Nomor Transaksi</th>
                                            <th>Jumlah</th>
                                            <th>Retail</th>
                                            <th>Jatuh Tempo</th>
                                            <th>Status</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>INV-87239</td>
                                            <td>Rp 60.000.000</td>
                                            <td>PT. Lemper</td>
                                            <td>2011/04/25</td>
                                            <td>Lunas</td>
                                            <td>
                                                <a href="#" className="btn btn-primary mr-1">Bayar</a>
                                                <button className="btn btn-danger" onClick={() => this.setState({ show: true })}>Alert</button>
      <SweetAlert
        show={this.state.show}
        title="Demo"
        text="SweetAlert in React"
        onConfirm={() => this.setState({ show: false })}
      />
      </td>
                                        </tr>
                                        <tr>
                                            <td>INV-84990</td>
                                            <td>Rp 82.000.000</td>
                                            <td>PT. Sinar Jaya</td>
                                            <td>2011/07/25</td>
                                            <td>Lunas</td>
                                            <td>
                                                <a href="#" className="btn btn-primary mr-1">Bayar</a>
                                                <a href="#" className="btn btn-info">Upload</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>INV-76824</td>
                                            <td>Rp 42.000.000</td>
                                            <td>PT. Purnama Indah</td>
                                            <td>2011/01/25</td>
                                            <td>Kredit</td>
                                            <td>
                                                <a href="#" className="btn btn-primary mr-1">Bayar</a>
                                                <a href="#" className="btn btn-info">Upload</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Nomor Transaksi</th>
                                            <th>Jumlah</th>
                                            <th>Retail</th>
                                            <th>Jatuh Tempo</th>
                                            <th>Status</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>;
                    {
                    /* Multi Select table end */
                    }

                </div>
            </div>
    
)
}
}
// swal({
//     title: "An input!",
//     text: "Write something interesting:",
//     type: "input",
//     showCancelButton: true,
//     closeOnConfirm: false,
//     inputPlaceholder: "Write something"
//   }, function (inputValue) {
//     if (inputValue === false) return false;
//     if (inputValue === "") {
//       swal.showInputError("You need to write something!");
//       return false
//     }
//     swal("Nice!", "You wrote: " + inputValue, "success");
//   });