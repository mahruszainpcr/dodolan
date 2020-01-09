import React from 'react';
import Link from 'next/link'
function Sidebar()  {
    return ( 
      <nav className="pcoded-navbar">
      <div className="pcoded-inner-navbar main-menu">
        <div className="pcoded-navigatio-lavel">Navigation</div>
        <ul className="pcoded-item pcoded-left-item">
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)">
              <span className="pcoded-micon"><i className="feather icon-home" /></span>
              <span className="pcoded-mtext">Dashboard</span>
            </a>
            <ul className="pcoded-submenu">
              <li className>
                <a href="home">
                  <span className="pcoded-mtext">Home</span>
                </a>
              </li>
              <li className>
                <a href="/">
                  <span className="pcoded-mtext">Dashboard</span>
                </a>
              </li>
              <li className=" ">
              <a href="forminputproduk">
                  <span className="pcoded-mtext">Input Produk</span>
                </a>
              </li>
              <li className=" ">
              <a href="notfound">
                  <span className="pcoded-mtext">Notfound</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="pcoded-hasmenu">
            <a href="javascript:void(0)">
              <span className="pcoded-micon"><i className="feather icon-sidebar" /></span>
              <span className="pcoded-mtext">Kelola Distributor</span>
            </a>
            <ul className="pcoded-submenu">
              <li className>
                <a href="keloladatadistributor">
                  <span className="pcoded-mtext">Tambah Data</span>
                </a>
              </li>
            </ul>
            <ul className="pcoded-submenu">
              <li className>
                <a href="produkdistributor">
                  <span className="pcoded-mtext">Lihat Produk</span>
                </a>
              </li>
            </ul>
            <ul className="pcoded-submenu">
              <li className>
                <a href="stock">
                  <span className="pcoded-mtext">Stock</span>
                </a>
              </li>
            </ul>
            <ul className="pcoded-submenu">
              <li className>
                <a href="penagihanretail">
                  <span className="pcoded-mtext">Penagihan Retail</span>
                </a>
              </li>
            </ul>
            </li>
            {/* start retail */}
            <li className="pcoded-hasmenu">
            <a href="javascript:void(0)">
              <span className="pcoded-micon"><i className="feather icon-sidebar" /></span>
              <span className="pcoded-mtext">Kelola Retail</span>
            </a>
            <ul className="pcoded-submenu">
              <li className>
                <a href="keloladataretail">
                  <span className="pcoded-mtext">Tambah Data</span>
                </a>
              </li>
            </ul>
            <ul className="pcoded-submenu">
              <li className>
                <a href="listproduk">
                  <span className="pcoded-mtext">List Produk</span>
                </a>
            
              </li>
            </ul>
            <ul className="pcoded-submenu">
              <li className>
                
                <a href="detailproduk">
                  <span className="pcoded-mtext">Detail Produk</span>
                </a>
            
              </li>
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
              <li className>
                
                <a href="listproduk">
                  <span className="pcoded-mtext">List Produk</span>
                </a>
            
              </li>
            </ul>
            <ul className="pcoded-submenu">
              <li className>
                
                <a href="detailproduk">
                  <span className="pcoded-mtext">Detail Produk</span>
                </a>
            
              </li>
            </ul>
            </li>
            {/* end Tim Lapangan */}
        </ul>  
      </div>
    </nav> 
  );
}

export default Sidebar;