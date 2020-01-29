import React, { Component } from 'react';
import {Table_Product, Table_Distributor, Table_Pengajuan_Blacklist,Table_Promosi,Table_Promosi_Khusus,Table_Rating,Table_Retail,Table_Retail_Alamat,Table_Retur,Table_Retur_Produk,Table_Stock} from '../reuse/Table_component'

class Index extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="row">
                <div className="col-6">
                <Table_Pengajuan_Blacklist/>

                </div>
                <div className="col-6">
                <Table_Product/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Table_Distributor/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Table_Promosi/>
                </div>
                <div className="col-6">
                    <Table_Promosi_Khusus/>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Table_Stock/>
                    </div>  
                    <div className="col-4">
                        <Table_Rating/>
                    </div>
                    <div className="col-4">
                        <Table_Retur_Produk/>
                    </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Table_Retail/>
                </div>
                <div className="col-6">
                    <Table_Retail_Alamat/>
                </div>
            </div>
            </div>
          );
    }
}
 
export default Index;