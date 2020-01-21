import React, {Component} from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import  DetailProduct  from '../reuse/DetailProduct'

class ProductDetail extends Component {
    
    render() { 
      const gambar = ['../files/assets/images/product-detail/pro-d-l-1.jpg','../files/assets/images/product-detail/pro-d-l-1.jpg','../files/assets/images/product-detail/pro-d-l-1.jpg']
        return ( 
            <div className="row">
                <div className="col-12">

                <DetailProduct idProduct="NG121" statusProduct="Tersedia" namaProduct="Avian Pearl" merkProduct="Avian" hargaProduct="65.000" deskripsiProduct=" Cat Avian Pearl adalah cat idaman keluarga Indonesia dengan komposisi terbaru yang membuat cat ini tahan lama dan bebas dari kandungan zat beracun" gambar={gambar} />
                </div>
            </div>
         );
    }
} 


 
export default ProductDetail;