import React, { Component } from 'react'

export default class FormInputProduk extends Component {
render() {
return (
<div>
    <div className="page-body">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h3>Input Produk</h3>
                        <span>Harap mengisi <b>semua</b> form yang telah tertera</span>
                    </div>
                    <div className="card-block">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="wizard">
                                    <section>
                                        <form className="wizard-form" id="example-advanced-form" action="#">
                                            <h3> Data Produk </h3>
                                            <fieldset>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="nama_produk" className="block">
                                                            Nama Produk
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="nama_produk" name="nama_produk" type="text"
                                                            className="required form-control" />
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
                                                        <label htmlFor="password-2" className="block">
                                                            Harga
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <div className="row">
                                                            <div className="col-md-4 col-lg-4"><input id="hargadalam"
                                                                    name="hargadalam" type="text"
                                                                    className="required form-control"
                                                                    placeholder="Harga Dalam Kota" /></div>
                                                            <div className="col-md-4 col-lg-4"><input id="hargaluar"
                                                                    name="hargaluar" type="text"
                                                                    className="required form-control"
                                                                    placeholder="Harga Luar Kota" /></div>
                                                            <div className="col-md-4 col-lg-4"><input id="hargapulau"
                                                                    name="hargapulau" type="text"
                                                                    className="required form-control"
                                                                    placeholder="Harga Kepulauan" /></div>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="confirm-2" className="block">
                                                            Stock
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="confirm-2" name="confirm" type="password"
                                                            className="form-control required" />
                                                    </div>
                                                </div> */}
                                            </fieldset>
                                            <h3> Foto Produk </h3>
                                            <fieldset>
                                                <div>
                                                    <div className="sub-title">Upload foto produk anda</div>
                                                    <input type="file" name="files[]" id="filer_input1"
                                                        multiple="multiple" />
                                                </div>
                                            </fieldset>
                                            <h3> Education </h3>
                                            <fieldset>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="kualitas_pasaran" className="block">
                                                            Kualitas Pasaran
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <select name="kualitas_pasaran" id="kualitas_pasaran"
                                                            className="required form-control">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="kategori" className="block">
                                                            Kategori
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <div className="row">
                                                            <div className="col-md-4 col-lg-4">
                                                            <select name="kategori" id="kategori"
                                                            className="required form-control">
                                                            <option value="Pilih Kategori" className="badge-danger">Pilih Kategori</option>
                                                            <option value="Bahan Bangunan">Bahan Bangunan</option>
                                                            <option value="Sepatu">Sepatu</option>
                                                        </select></div>
                                                        <div className="col-md-4 col-lg-4">
                                                            <select name="sub_kategori" id="sub_kategori"
                                                            className="required form-control">
                                                            <option value="Pilih Sub Kategori" className="badge-danger">Pilih Sub Kategori</option>
                                                            <option value="Konstruksi">Konstruksi</option>
                                                            <option value="Cat">Cat</option>
                                                        </select></div>
                                                        <div className="col-md-4 col-lg-4">
                                                            <select name="sub_sub_kategori" id="sub_sub_kategori"
                                                            className="required form-control">
                                                            <option value="Pilih Sub Kategori II" className="badge-danger">Pilih Sub Kategori II</option>
                                                            <option value="Besi">Besi</option>
                                                            <option value="Pasir">Pasir</option>
                                                        </select></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="brand" className="block">
                                                            Brand
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <select name="brand" id="brand"
                                                            className="required form-control">
                                                            <option value="Dulux">Dulux</option>
                                                            <option value="Avian">Avian</option>
                                                            <option value="Nippon">Nippon</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="satuan" className="block">
                                                            Satuan
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="satuan" name="satuan" type="text"
                                                            className="required form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="ukuran" className="block">
                                                            Ukuran
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="ukuran" name="ukuran" type="text"
                                                            className="required form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 col-lg-2">
                                                        <label htmlFor="warna" className="block">
                                                            Warna
                                                        </label>
                                                    </div>
                                                    <div className="col-md-8 col-lg-10">
                                                        <input id="ukuran" name="ukuran" type="text"
                                                            className="required form-control" data-control="hue" defaultValue="#ff6161" />

                                                    </div>
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
)
}
}