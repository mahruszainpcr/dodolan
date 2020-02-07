import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap'
import {} from './Form'
import { SubJudul } from '../reuse/Typografi';
import DataTable, {createTheme} from 'react-data-table-component';

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
    
<Card>
    <CardHeader>
        <SubJudul name="List Blacklist" />
    </CardHeader>
    <CardBody>

        <DataTable noHeader columns={columns} data={data} />
    </CardBody>
</Card>
);
}
}


export default Index;