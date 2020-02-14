import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap'
import {} from './Form'
import { SubJudul2 } from '../reuse/Typografi';
import DataTable, {} from 'react-data-table-component';
import { PageJudul } from '../reuse/Page';

const paginationOptions = { rowsPerPageText: 'Tampilkan data per', rangeSeparatorText: 'dari' };

class Index extends Component {
state = { }
render() {
    
    const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
    const columns = [
    {
    name: 'Title',
    selector: 'title',
    sortable: true,
    },
    {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
    },
    ];
return (
    <div>
<PageJudul title="List Pengajuan Blacklist" deskripsiPage="Berisikan list data pengajuan blacklist dari Distributor"/>
<Card>
           <CardBody >
           
            <DataTable
          columns= {columns}
          data = {data}
          pagination
          paginationComponentOptions={paginationOptions}
        //   selectableRows
          noHeader
          persistTableHead
        ></DataTable>
            </CardBody>
          </Card>
    </div>
);
}
}


export default Index;