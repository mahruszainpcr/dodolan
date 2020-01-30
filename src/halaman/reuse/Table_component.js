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
           <CardHeader>
             <SubJudul name="Tabel Distributor"/>
           </CardHeader>
            <DataTable
            // title="Tabel Distributor"
          columns= {columns}
          data = {data}
          pagination
          paginationComponentOptions={paginationOptions}
          selectableRows
          noHeader
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
         <CardHeader>
           <SubJudul name="Tabel Pengajuan Blacklist"/>
         </CardHeader>
          <DataTable
          noHeader
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
         <CardHeader>
           <SubJudul name="Tabel Produk"/>
         </CardHeader>
          <DataTable
          noHeader
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
         <CardHeader>
           <SubJudul name="Tabel Promosi"/>
         </CardHeader>
          <DataTable
          noHeader
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


class Table_Kategori extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Kategori',
        selector: 'nama_produk_kategori',
        sortable: true,
      },
      {
        name: 'Sub Kategori',
        selector: 'nama_produk_sub_kategori',
        sortable: true,
      },
      {
        name: 'Sub Sub Kategori',
        selector: 'nama_produk_sub_sub_kategori',
        sortable: true,
      },
      
    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Kategori"/>
         </CardHeader>
          <DataTable
          noHeader
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



class Table_Stock extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Nama Pabrik',
        selector: 'nama_pabrik_produk_stock',
        sortable: true,
      },
      {
        name: 'No Invoice',
        selector: 'no_invoice_produk_stock',
        sortable: true,
      },
      {
        name: 'Tanggal Stock',
        selector: 'tanggal_produk_stock',
        sortable: true,
      },
      {
        name: 'Jumlah',
        selector: 'jumlah',
        sortable: true,
      },
      
    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Stock"/>
         </CardHeader>
          <DataTable
          noHeader
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

class Table_Promosi_Khusus extends Component {
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
        name: 'Tanggal Pengajuan',
        selector: 'tanggal_pengajuan',
        sortable: true,
      },
      {
        name: 'Keterangan',
        selector: 'keterangan',
        sortable: true,
      },
      {
        name: 'Status',
        selector: 'status',
        sortable: true,
      },
      
    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Promosi Khusus"/>
         </CardHeader>
          <DataTable
         noHeader
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
 
class Table_Rating extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Distributor',
        selector: 'id_penjualan_distributor',
        sortable: true,
      },
      {
        name: 'Kecepatan',
        selector: 'kecepatan',
        sortable: true,
      },
      {
        name: 'Kelengkapan',
        selector: 'kelengkapan',
        sortable: true,
      },
      {
        name: 'Kesesuaian',
        selector: 'kesesuaian',
        sortable: true,
      },
      
    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Rating"/>
         </CardHeader>
          <DataTable
          noHeader
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
 
class Table_Retail extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Nama',
        selector: 'nama_retail',
        sortable: true,
      },
      {
        name: 'Alamat',
        selector: 'alamat_retail',
        sortable: true,
      },
      {
        name: 'No KTP',
        selector: 'no_ktp_retail',
        sortable: true,
      },
      {
        name: 'Email',
        selector: 'email_retail',
        sortable: true,
      },
      {
        name: 'Titik X',
        selector: 'x_retail',
        sortable: true,
      },
      {
        name: 'Titik Y',
        selector: 'y_retail',
        sortable: true,
      },
      {
        name: 'No HP',
        selector: 'no_hp_retail',
        sortable: true,
      },
      {
        name: 'Foto KTP',
        selector: 'foto_ktp_retail',
        sortable: true,
      },
      {
        name: 'Status',
        selector: 'status',
        sortable: true,
      },
      {
        name: 'No Izin',
        selector: 'no_izin_retail',
        sortable: true,
      },
    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Retail"/>
         </CardHeader>
          <DataTable
          noHeader
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

class Table_Retail_Alamat extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Alamat',
        selector: 'alamat',
        sortable: true,
      },
      {
        name: 'Titik X',
        selector: 'x',
        sortable: true,
      },
      {
        name: 'Titik Y',
        selector: 'y',
        sortable: true,
      },
      {
        name: 'Nama Penerima',
        selector: 'nama_penerima',
        sortable: true,
      },
      {
        name: 'Kontak Penerima',
        selector: 'kontak_penerima',
        sortable: true,
      },
      {
        name: 'Retail',
        selector: 'id_retail',
        sortable: true,
      },
      
    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Retail Alamat"/>
         </CardHeader>
          <DataTable
          noHeader
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
 
 

class Table_Retur extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'No Invoice Retur',
        selector: 'no_invoice_retur',
        sortable: true,
      },
      {
        name: 'No Penjualan',
        selector: 'id_penjualan_distributor',
        sortable: true,
      },
      {
        name: 'Tanggal',
        selector: 'tanggal',
        sortable: true,
      },
      {
        name: 'Status ',
        selector: 'status ',
        sortable: true,
      },
      
    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Retur"/>
         </CardHeader>
          <DataTable
         noHeader
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

class Table_Retur_Produk extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'No Retur',
        selector: 'id_retur',
        sortable: true,
      },
      {
        name: 'Produk',
        selector: 'id_produk',
        sortable: true,
      },
      {
        name: 'Jumlah',
        selector: 'jumlah',
        sortable: true,
      },
      {
        name: 'Alasan ',
        selector: 'alasan ',
        sortable: true,
      },
      
    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Retur Produk"/>
         </CardHeader>
          <DataTable
          noHeader
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

class Table_Brand extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Nama Brand',
        selector: 'nama_produk_brand',
        sortable: true,
      },
    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Brand"/>
         </CardHeader>
          <DataTable
          noHeader
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
class Table_Kualitas_Pasaran extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Nama Kualitas Pasaran',
        selector: 'nama_kualitas_pasaran',
        sortable: true,
      },
    
      
    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Kualitas Pasaran"/>
         </CardHeader>
          <DataTable
          noHeader
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
 
class Table_Satuan extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Nama Satuan',
        selector: 'nama_produk_satuan',
        sortable: true,
      },
    
      
    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Satuan"/>
         </CardHeader>
          <DataTable
          noHeader
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
class Table_Ukuran extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Nama Ukuran',
        selector: 'nama_produk_ukuran',
        sortable: true,
      },
    
      
    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Ukuran"/>
         </CardHeader>
          <DataTable
          noHeader
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
class Table_Warna extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Nama Warna',
        selector: 'nama_produk_warna',
        sortable: true,
      },
    
      
    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Warna"/>
         </CardHeader>
          <DataTable
          noHeader
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

class Table_Sub_Kategori extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Nama Sub Kategori',
        selector: 'nama_produk_sub_kategori',
        sortable: true,
      },
      {
        name: 'Nama Kategori',
        selector: 'id_kategori',
        sortable: true,
      },

    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Sub Kategori"/>
         </CardHeader>
          <DataTable
          noHeader
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

class Table_Sub_Sub_Kategori extends Component {
  state = {  }
  render() {
    const data = [{ id: 1, nama: 'Conan the Barbarian', no_ktp_distributor: '1982',no_hp_distributor:'0812116121' }];
    const columns = [
      {
        name: 'Nama Sub Sub Kategori',
        selector: 'nama_produk_sub_sub_kategori',
        sortable: true,
      },
      {
        name: 'Nama Kategori',
        selector: 'id_produk_sub_kategori',
        sortable: true,
      },

    ];
      return ( 
        <Card>
         <CardBody >
         <CardHeader>
           <SubJudul name="Tabel Sub Sub Kategori"/>
         </CardHeader>
          <DataTable
          noHeader
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
export {Table_Product, Table_Distributor, Table_Pengajuan_Blacklist,Table_Promosi,Table_Promosi_Khusus,Table_Rating,Table_Retail,Table_Retail_Alamat,Table_Retur,Table_Retur_Produk,Table_Stock,Table_Satuan,Table_Kualitas_Pasaran, Table_Ukuran,Table_Warna,Table_Kategori,Table_Sub_Kategori,Table_Sub_Sub_Kategori,Table_Brand};