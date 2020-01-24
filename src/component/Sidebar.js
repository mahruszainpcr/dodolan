import React, {Component } from 'react';
import Link from 'next/link'
function Sidebar()  {
    return ( 
      <nav className="pcoded-navbar">
      <div className="pcoded-inner-navbar main-menu">
        <div className="pcoded-navigatio-lavel">Dodolan</div>
        <ul className="pcoded-item pcoded-left-item">
          {/* dashboard */}
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
          {/* Admin */}
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)">
              <span className="pcoded-micon"><i className="feather icon-sidebar" /></span>
              <span className="pcoded-mtext">Admin</span>
            </a>
            <ul className="pcoded-submenu">
            <SubMenu tujuan="utilitas" nama="Tambah Utilitas"/>
            <li className="pcoded-hasmenu">
      <a href="javascript:void(0)">
        <span className="pcoded-mtext">Promosi</span>
      </a>
      <ul class="pcoded-submenu">
                                            <li class="">
                                                <a href="inputpromosi">
                                                    <span class="pcoded-mtext">Input Promosi</span>
                                                </a>
                                            </li>
                                        </ul>
    </li>
            
     
            </ul>
            </li>
            {/* produk */}
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
            {/* distributor */}
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
            {/* lama */}
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