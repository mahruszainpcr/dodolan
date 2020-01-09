import React, { Component } from 'react'





export default class TabelTagihRetail extends Component {

render() {
return (
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
                                    <button className="btn btn-success" data-target="#detailModal" data-toggle="modal">
                                        Cek Detail
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>INV-84990</td>
                                <td>Rp 82.000.000</td>
                                <td>PT. Sinar Jaya</td>
                                <td>2011/07/25</td>
                                <td>Lunas</td>
                                <td>
                                    <button className="btn btn-success" data-target="#detailModal" data-toggle="modal">
                                        Cek Detail
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>INV-76824</td>
                                <td>Rp 42.000.000</td>
                                <td>PT. Purnama Indah</td>
                                <td>2011/01/25</td>
                                <td>Kredit</td>
                                <td>
                                    <button className="btn btn-success" data-target="#detailModal" data-toggle="modal">
                                        Cek Detail
                                    </button>
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
        </div>
        <Modal />
        {
        /* Multi Select table end */
        }

    
</div>

)
}
}

const Modal = () =>{
return(
<div>



    <div className="modal fade" tabIndex={-1} role="dialog" id="detailModal">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center">Detail Transaksi PT. [Nama] </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">x</span>
                    </button>
                </div>
                <div className="modal-body">

                    {/* start table */}
                    <table id="multi-select" className="table table-responsive table-hover table-borderless nowrap">
                        <thead>
                            <tr>
                                <th className="text-center">Periode</th>
                                <th className="text-center">Nomor Transaksi</th>
                                <th className="text-center">Jumlah</th>
                                <th className="text-center">Retail</th>
                                <th className="text-center">Tanggal Bayar</th>
                                <th className="text-center">Sisa</th>
                                <th className="text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>INV-87239</td>
                                <td>Rp 60.000.000</td>
                                <td>PT. Lemper</td>
                                <td>2011/04/25</td>
                                <td>Rp 210.000.000</td>
                                <td>
                                    <button className="btn btn-primary mr-1" data-target="#bayarModal"
                                        data-toggle="modal">
                                        Bayar
                                    </button>
                                    {/* <button className="btn btn-secondary" data-target="#uploadModal"
                                        data-toggle="modal">
                                        Upload
                                    </button> */}
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>INV-87240</td>
                                <td>Rp 200.000.000</td>
                                <td>PT. Sinar Jaya</td>
                                <td>2011/07/25</td>
                                <td>Rp 10.000.000</td>
                                <td>
                                    <button className="btn btn-primary mr-1" data-target="#bayarModal"
                                        data-toggle="modal">
                                        Bayar
                                    </button>
                                    {/* <button className="btn btn-secondary" data-target="#uploadModal"
                                        data-toggle="modal">
                                        Upload
                                    </button> */}
                                </td>
                            </tr>

                        </tbody>
                        <tfoot>
                            <tr>
                                <th className="text-center">Periode</th>
                                <th className="text-center">Nomor Transaksi</th>
                                <th className="text-center">Jumlah</th>
                                <th className="text-center">Retail</th>
                                <th className="text-center">Jatuh Tempo</th>
                                <th className="text-center">Sisa</th>
                                <th className="text-center">Aksi</th>
                            </tr>
                        </tfoot>
                    </table>
                    {/* end table */}
                </div>
            </div>
        </div>
    </div>
    {/* start */}
    {/* <div className="modal fade" tabIndex={-1} role="dialog" id="uploadModal">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center">Upload Bukti Pembayaran</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">x</span>
                    </button>
                </div>
                <div className="modal-body">
                    <input type="file" name="files[]" id="filer_input1" />
                </div>
            </div>
        </div>
    </div> */}
    {/* end */}
    <div className="modal fade" tabIndex={-1} role="dialog" id="bayarModal">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center">Pembayaran</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">x</span>
                    </button>
                </div>
                <div className="modal-body">
                    <h4 className="mb-2">Nominal</h4>
                    <input type="number" className="form-control" name="kredit" id="kredit"
                        placeholder="Masukkan Nominal Pembayaran" />
                    <h4 className="mt-3 mb-2">Upload Bukti Pembayaran</h4>
                    <input type="file" name="files[]" id="filer_input2" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Keluar</button>
                    <button type="button" class="btn btn-primary">Simpan</button>
                </div>
            </div>
        </div>
    </div>
</div>

);
}
