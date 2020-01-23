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
import Stock from './halaman/Distributor/Stock';
import ProductDetail from './halaman/Produk/ProductDetail';
// Distributor
import InputDistributor from './halaman/Distributor/Input';
import Profil from './halaman/Distributor/Profil';
// Blacklist
import InputBlacklist from './halaman/Blacklist/Input'
// Admin
import Utilitas from './halaman/Admin/Form'

// {end new}
// Distributor
import FormInputProduk from './page/Distributor/FormInputProduk';
import KelolaDataDistributor from './page/Distributor/KelolaDataDistributor';
import ProdukDistributor from './page/Distributor/ProdukDistributor';
import PenagihanRetail from './page/Distributor/PenagihanRetail';

// Retail
import KelolaDataRetail from './page/Retail/KelolaDataRetail';
import ListProduk from './page/Retail/ListProduk';
import DetailProduk from './page/Retail/DetailProduk';
// Tim Lapangan
import Blacklist from './page/TimLapangan/Blacklist'


function App() {
  return (
   
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/home" component={Home} />
        <Route path="/InputProduk" component={InputProduk} />
        <Route path="/InputDistributor" component={InputDistributor} />
        <Route path="/InputBlacklist" component={InputBlacklist} />
        <Route path="/Utilitas" component={Utilitas} />
        <Route path="/Profil" component={Profil} />
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
        <Route path="/Blacklist" component={Blacklist} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
   
    
  );
}

export default App;
