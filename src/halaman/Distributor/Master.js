import React, { Component } from 'react'
import {PageJudul} from '../reuse/Page'
import { Uti_Brand, Uti_Satuan_Produk, Uti_Warna } from '../Admin/Form'

class InputProduk extends Component {
state = { }
render() {
return (
<div>
<PageJudul title="Produk" deskripsiPage="Fitur digunakan untuk menambah produk baru." />
            <div className="row">
                <div className="col-4">
                <Uti_Brand/>
                </div>
                <div className="col-4">
                    <Uti_Satuan_Produk/>
                   
                </div>
                <div className="col-4">
                    <Uti_Warna/>
                </div>
            </div>
</div>
      
);
}
}

export default InputProduk;