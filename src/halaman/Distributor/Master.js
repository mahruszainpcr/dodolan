import React, { Component } from 'react'
import {Card, CardBody, CardHeader, CardTitle, Container} from 'reactstrap'
import { Uti_Brand, Uti_Satuan_Produk, Uti_Warna } from '../Admin/Form'

class InputProduk extends Component {
state = { }
render() {
return (

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
      
);
}
}

export default InputProduk;