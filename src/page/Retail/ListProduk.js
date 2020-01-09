import React, { Component } from 'react'
import {Page, UserActivity} from '../reuse/Page'
import  CardProduct from '../reuse/CardProduct'
export default class ListProduk extends Component {
render() {

return (
<div>
<Page title="List Product" icon="icofont icofont-dashboard" judul="Produk" subJudul="Cat"/>
{
  /* Page body start */
}
<div className="page-body">
  {/* Product list start */}
  <div className="row">
     <CardProduct namaProduk="Avian Pearl" label="Baru" Rating="4" jumlahRating="10" jumlahReview="200" harga="210.000"/>
     <CardProduct namaProduk="Avian Pearl" label="Baru" Rating="4" jumlahRating="10" jumlahReview="200" harga="210.000"/>
     <CardProduct namaProduk="Avian Pearl" label="Baru" Rating="4" jumlahRating="10" jumlahReview="200" harga="210.000"/>
     <CardProduct namaProduk="Avian Pearl" label="Baru" Rating="4" jumlahRating="10" jumlahReview="200" harga="210.000"/>
  </div>
  {/* Product list end */}
</div>;
{
  /* Page body end */
}

</div>
)
}
}