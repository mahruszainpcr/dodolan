import React, { Component } from 'react';
import { SubJudul } from './Typografi';
import DataTable, {createTheme} from 'react-data-table-component';
import { CardHeader, CardBody, Card } from 'reactstrap';
// import MUIDataTable from 'mui-datatables';
const paginationOptions = { rowsPerPageText: 'Tampilkan data per', rangeSeparatorText: 'dari' };


class Table_component extends Component {
    state = {  }
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
            <DataTable
            title="Arnold Movies"
            columns= {columns}
            data = {data}
            
          />
         );
    }
}

class Table_Distributor extends Component {
    state = {  }
    render() {
      const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
      const columns = [
        {
          name: 'Nama',
          selector: 'nama',
          sortable: true,
        },
        {
          name: 'Alamat',
          selector: 'nama_distributor',
          sortable: true,
        },
        {
          name: 'No KTP',
          selector: 'no_ktp_distributor',
          sortable: true,
        },
        {
          name: 'Username',
          selector: 'username_distributor',
          sortable: true,
        },
        {
          name: 'Email',
          selector: 'email_distributor',
          sortable: true,
        },
        
        {
          name: 'No HP',
          selector: 'no_hp_distributor',
          sortable: true,
        },
      ];
        return ( 
          <Card>
           <CardBody >
           
            <DataTable
            title="Tabel Distributor"
          columns= {columns}
          data = {data}
          pagination
          paginationComponentOptions={paginationOptions}
          selectableRows
          persistTableHead
        ></DataTable>
            </CardBody>
          </Card>
         );
    }
}

class Table_Pengajuan_Blacklist extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Distributor',
        selector: 'id_distributor',
        sortable: true,
      },
      {
        name: 'Retail',
        selector: 'id_retail',
        sortable: true,
      },
      {
        name: 'Alasan',
        selector: 'alasan',
        sortable: true,
      },
      {
        name: 'Dibuat',
        selector: 'create_at',
        sortable: true,
      },
    ];
      return ( 
        <Card>
         <CardBody >
         
          <DataTable
          title="Tabel Pengajuan Blacklist"
        columns= {columns}
        data = {data}
        pagination
        paginationComponentOptions={paginationOptions}
        selectableRows
        persistTableHead
      ></DataTable>
          </CardBody>
        </Card>
       );
  }
}

class Table_Product extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Nama',
        selector: 'nama_produk',
        sortable: true,
      },
      {
        name: 'Deskripsi',
        selector: 'deskripsi_produk',
        sortable: true,
      },
      {
        name: 'Harga Dalam',
        selector: 'harga_dalam_produk',
        sortable: true,
      },
      {
        name: 'Harga Luar',
        selector: 'harga_luar_produk',
        sortable: true,
      },
      {
        name: 'Harga Pulau',
        selector: 'harga_pulau_produk',
        sortable: true,
      },
    ];
      return ( 
        <Card>
         <CardBody >
         
          <DataTable
          title="Tabel Product"
        columns= {columns}
        data = {data}
        pagination
        paginationComponentOptions={paginationOptions}
        selectableRows
        persistTableHead
      ></DataTable>
          </CardBody>
        </Card>
       );
  }
}
 
class Table_Promosi extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Distributor',
        selector: 'id_distributor',
        sortable: true,
      },
      {
        name: 'Nama',
        selector: 'nama_promosi',
        sortable: true,
      },
      {
        name: 'Keterangan',
        selector: 'keterangan',
        sortable: true,
      },
      {
        name: 'Foto',
        selector: 'foto',
        sortable: true,
      },
      {
        name: 'Tanggal Mulai',
        selector: 'tanggal_mulai',
        sortable: true,
      },
      {
        name: 'Tanggal Selesai',
        selector: 'tanggal_selesai',
        sortable: true,
      },
      {
        name: 'Status',
        selector: 'status',
        sortable: true,
      },
      {
        name: 'Promosi Khusus',
        selector: 'jenis',
        sortable: true,
      },
      {
        name: 'Jenis',
        selector: 'jenis',
        sortable: true,
      },
      {
        name: 'Jenis Bonus',
        selector: 'jenis_bonus',
        sortable: true,
      },
    ];
      return ( 
        <Card>
         <CardBody >
         
          <DataTable
          title="Tabel Promosi"
        columns= {columns}
        data = {data}
        pagination
        paginationComponentOptions={paginationOptions}
        selectableRows
        persistTableHead
      ></DataTable>
          </CardBody>
        </Card>
       );
  }
}
 
 

 
export {Table_Product, Table_Distributor, Table_Pengajuan_Blacklist,Table_Promosi};