import React, { Component } from 'react'


export default class KelolaDataRetail extends Component {
    render() {
        return (
            <div>
                
<div>
    <div className="page-body">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h3>Form Pengisian Data Retail</h3>
                        <span>Harap mengisi <b>semua</b> form yang telah tertera</span>
                    </div>
                    <div className="card-block">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="wizard">
                                    <section>
                                        <form className="wizard-form" id="example-advanced-form" action="#">
                                            <h3> Data Retail </h3>
                                            <fieldset>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="nama_retail" className="block">
                                                            Nama Retail
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">

                                                        <input id="nama_retail" name="nama_retail" type="text"
                                                            className="required form-control  form-control-capitalize" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="alamat" className="block">
                                                            Alamat
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                    <input id="alamat" name="alamat" type="text"
                                                            className="required form-control " />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="ktp" className="block">
                                                            No KTP
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                    <input id="ktp" name="ktp" type="text"
                                                            className="required form-control " />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="username" className="block">
                                                            Nama Pengguna
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                    <input id="username" name="username" type="text"
                                                            className="required form-control " />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="email" className="block">
                                                            Email
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                    <input id="email" name="email" type="email"
                                                            className="required form-control " />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="nohp" className="block">
                                                            Nomor Telepon/HP
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                    <input id="nohp" name="nohp" type="text"
                                                            className="required form-control " />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="deskripsi" className="block">
                                                            Deskripsi
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <textarea name="deskripsi" id="deskripsi" cols="10" rows="3"
                                                            className="form-control required"></textarea>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="catatan" className="block">
                                                            Catatan
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <textarea name="catatan" id="catatan" cols="10" rows="2"
                                                            className="form-control required"></textarea>
                                                    </div>
                                                </div>
                                                
                                            </fieldset>
                                            <h3> Foto KTP </h3>
                                            <fieldset>
                                                <div>
                                                    <div className="sub-title">Upload foto KTP anda</div>
                                                    <input type="file" name="files[]" id="filer_input1"
                                                       />
                                                </div>
                                            </fieldset>
                                            <h3> Foto Tempat </h3>
                                            <fieldset>
                                                <div>
                                                    <div className="sub-title">Upload foto Tempat anda</div>
                                                    <input type="file" name="files[]" id="filer_input2"
                                                        multiple="multiple" />
                                                </div>
                                            </fieldset>
                                            
                                        </form>

                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
        )
    }
}

