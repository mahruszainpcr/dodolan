import React, { Component } from 'react';
import {Table_Product, Table_Distributor, Table_Pengajuan_Blacklist,Table_Promosi} from '../reuse/Table_component'

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
                <div className="col-12">
                    <Table_Promosi/>
                </div>
            </div>
            </div>
          );
    }
}
 
export default Index;