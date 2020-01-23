import React, {Component } from 'react';
import Link from 'next/link'
function Sidebar()  {
    return ( 
      <nav className="pcoded-navbar">
      <div className="pcoded-inner-navbar main-menu">
        <div className="pcoded-navigatio-lavel">Dodolan</div>
        <ul className="pcoded-item pcoded-left-item">
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)">
              <span className="pcoded-micon"><i className="feather icon-home" /></span>
              <span className="pcoded-mtext">Dashboard</span>
            </a>
            <ul className="pcoded-submenu">
              <SubMenu tujuan="/" nama="Dashboard"/>
              <SubMenu tujuan="notfound" nama="notfound"/>
            </ul>
          </li>
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)">
              <span className="pcoded-micon"><i className="feather icon-sidebar" /></span>
              <span className="pcoded-mtext">Produk</span>
            </a>
            <ul className="pcoded-submenu">
            <SubMenu tujuan="inputproduk" nama="Input Produk"/>
            <SubMenu tujuan="stock" nama="Stock"/>
            <SubMenu tujuan="productdetail" nama="Product Detail"/>
            </ul>
            </li>
            <li className="pcoded-hasmenu">
            <a href="javascript:void(0)">
              <span className="pcoded-micon"><i className="feather icon-sidebar" /></span>
              <span className="pcoded-mtext">Distributor</span>
            </a>
            <ul className="pcoded-submenu">
            <SubMenu tujuan="inputdistributor" nama="Input Distributor"/>
            <SubMenu tujuan="listprodukdistributor" nama="List Produk"/>
            <SubMenu tujuan="profil" nama="Profil"/>
            <SubMenu tujuan="penagihanretail" nama="Penagihan Retail"/>
            <SubMenu tujuan="inputblacklist" nama="Pengajuan Blacklist"/>
            </ul>
            </li>
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)">
              <span className="pcoded-micon"><i className="feather icon-sidebar" /></span>
              <span className="pcoded-mtext">Kelola Distributor</span>
            </a>
            <ul className="pcoded-submenu">
            <SubMenu tujuan="keloladatadistributor" nama="Tambah Data"/>
            <SubMenu tujuan="produkdistributor" nama="Lihat Produk"/>
            <SubMenu tujuan="penagihanretail" nama="Penagihan Retail"/>
            <SubMenu tujuan="stock" nama="Stock"/>
            </ul>
            </li>
            {/* start retail */}
            <li className="pcoded-hasmenu">
            <a href="javascript:void(0)">
              <span className="pcoded-micon"><i className="feather icon-sidebar" /></span>
              <span className="pcoded-mtext">Kelola Retail</span>
            </a>
            <ul className="pcoded-submenu">
            <SubMenu tujuan="keloladataretail" nama="Tambah"/>
            <SubMenu tujuan="listproduk" nama="List"/>
            <SubMenu tujuan="detailproduk" nama="Detail"/>
            </ul>
            </li>
            {/* end retail */}
            {/* start Tim Lapangan */}
            <li className="pcoded-hasmenu">
            <a href="javascript:void(0)">
              <span className="pcoded-micon"><i className="feather icon-sidebar" /></span>
              <span className="pcoded-mtext">Kelola Tim Lapangan</span>
            </a>
            <ul className="pcoded-submenu">
            <SubMenu tujuan="blacklist" nama="Blacklist"/>
            </ul>
            </li>
            {/* end Tim Lapangan */}
        </ul>  
      </div>
    </nav> 
  );
}

class SubMenu extends Component {
  state = {  }
  render() { 
    return (  <li className>
      <a href={ this.props.tujuan }>
        <span className="pcoded-mtext">{ this.props.nama}</span>
      </a>
    </li> );
  }
}
 


export default Sidebar;