import React from 'react';
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
                <a href="produkdistributor">
                  <span className="pcoded-mtext">Lihat Produk</span>
                </a>
              </li>
            </ul>
            <ul className="pcoded-submenu">
              <li className>
                <a href="keloladatadistributor">
                  <span className="pcoded-mtext">Tambah Data</span>
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
        </ul>  
      </div>
    </nav> 
  );
}

export default Sidebar;