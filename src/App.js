import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './page/Dashboard';
import NotFound from './page/NotFound';
import Home from './page/Home';
// {new}
// Produk
import InputProduk from './halaman/Produk/Input';
import InputProdukJual from './halaman/Produk/InputJual';
import Stock from './halaman/Distributor/Stock';
import ProductDetail from './halaman/Produk/ProductDetail';
import Cart from './halaman/Produk/Cart';
// Distributor
import InputDistributor from './halaman/Distributor/Input';
import InputMaster from './halaman/Distributor/Master';
import PenagihanRetail from './halaman/Distributor/PenagihanRetail';
import Profil from './halaman/Distributor/Profil';
// Blacklist
import InputBlacklist from './halaman/Blacklist/Input'
import ViewBlacklist from './halaman/Blacklist/Blacklist_view'
// import Blacklist from './halaman/Blacklist/Blacklist'
// Admin
import Utilitas from './halaman/Admin/Utilitas'
import Table_list from './halaman/Admin/Table_list'
// Promosi
import InputPromosi from './halaman/Promosi/Input'
import InputPromosiKhusus from './halaman/Promosi/InputKhusus'
import InputPromosiProduk from './halaman/Promosi/InputPromosiProduk'
import InputPromosiProdukBonus from './halaman/Promosi/InputPromosiProdukBonus'
// Invoice
import Invoice from './halaman/Invoice/Index'
// {end new}
// Distributor
import FormInputProduk from './page/Distributor/FormInputProduk';
import KelolaDataDistributor from './page/Distributor/KelolaDataDistributor';
import ProdukDistributor from './page/Distributor/ProdukDistributor';

// Retail
import KelolaDataRetail from './page/Retail/KelolaDataRetail';
import ListProduk from './page/Retail/ListProduk';
import DetailProduk from './page/Retail/DetailProduk';
// Tim Lapangan
// import Blacklist from './page/TimLapangan/Blacklist'

require('dotenv').config();

function App() {
  return (
   
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/home" component={Home} />
        <Route path="/InputProduk" component={InputProduk} />
        <Route path="/InputProdukJual" component={InputProdukJual} />
        <Route path="/InputDistributor" component={InputDistributor} />
        <Route path="/InputMaster" component={InputMaster} />
        <Route path="/InputBlacklist" component={InputBlacklist} />
        <Route path="/ViewBlacklist" component={ViewBlacklist} />
        <Route path="/Invoice" component={Invoice} />
        <Route path="/InputPromosi" component={InputPromosi} />
        <Route path="/InputPromosiKhusus" component={InputPromosiKhusus} />
        <Route path="/InputPromosiProduk" component={InputPromosiProduk} />
        <Route path="/InputPromosiProdukBonus" component={InputPromosiProdukBonus}/>
        <Route path="/Utilitas" component={Utilitas} />
        <Route path="/Table_list" component={Table_list} />
        <Route path="/Profil" component={Profil} />
        <Route path="/Cart" component={Cart} />
        <Route path="/ProductDetail" component={ProductDetail} />
        <Route path="/ProductDetail/:id" component={ProductDetail} />
        <Route path="/FormInputProduk" component={FormInputProduk} />
        <Route path="/KelolaDataDistributor" component={KelolaDataDistributor} />
        <Route path="/ProdukDistributor" component={ProdukDistributor} />
        <Route path="/Stock" component={Stock} />
        <Route path="/KelolaDataRetail" component={KelolaDataRetail} />
        <Route path="/PenagihanRetail" component={PenagihanRetail} />
        <Route path="/ListProduk" component={ListProduk} />
        <Route path="/DetailProduk" component={DetailProduk} />
        {/* <Route path="/Blacklist" component={Blacklist} /> */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
   
    
  );
}

export default App;
