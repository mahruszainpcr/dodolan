import React, { Component } from 'react';
import { Uti_Brand,Uti_Kualitas_Pasaran, Uti_Satuan_Produk, Uti_Kategori_Produk, Uti_Sub_Kategori_Produk, Uti_Sub_Sub_Kategori_Produk } from './Form';
import {PageJudul} from '../reuse/Page';

class Index extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <PageJudul title="Utilitas" deskripsiPage="Halaman yang menyajikan fitur penambahan data master." />
            <div className="row">
                <div className="col-4">
                    <Uti_Brand/>
                </div>
                <div className="col-4">
                    <Uti_Kualitas_Pasaran/>
                </div>
                <div className="col-4">
                    <Uti_Satuan_Produk/>
                </div>
                <div className="col-4">
                    <Uti_Kategori_Produk/>
                </div>
                <div className="col-4">
                    <Uti_Sub_Kategori_Produk/>
                </div>
                <div className="col-4">
                    <Uti_Sub_Sub_Kategori_Produk/>
                </div>
            </div>
            </div>
         );
    }
}
 
export default Index;