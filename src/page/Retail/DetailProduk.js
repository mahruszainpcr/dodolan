import React, { Component } from 'react'
import DetailProduct from '../reuse/DetailProduct'

class DetailProduk extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <DetailProduct idProduct="NG121" statusProduct="Tersedia" namaProduct="Avian Pearl" merkProduct="Avian" hargaProduct="65.000" deskripsiProduct=" Cat Avian Pearl adalah cat idaman keluarga Indonesia dengan komposisi terbaru yang membuat cat ini tahan lama dan bebas dari kandungan zat beracun" />
            </div>
         );
    }
} 

export default DetailProduk;