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
        <Route path="/home" exact component={Home} />
        <Route path="/InputProduk" exact component={InputProduk} />
        <Route path="/InputDistributor" exact component={InputDistributor} />
        <Route path="/Profil" exact component={Profil} />
        <Route path="/ProductDetail" exact component={ProductDetail} />
        <Route path="/FormInputProduk" exact component={FormInputProduk} />
        <Route path="/KelolaDataDistributor" exact component={KelolaDataDistributor} />
        <Route path="/ProdukDistributor" exact component={ProdukDistributor} />
        <Route path="/Stock" exact component={Stock} />
        <Route path="/KelolaDataRetail" exact component={KelolaDataRetail} />
        <Route path="/PenagihanRetail" exact component={PenagihanRetail} />
        <Route path="/ListProduk" exact component={ListProduk} />
        <Route path="/DetailProduk" exact component={DetailProduk} />
        <Route path="/Blacklist" exact component={Blacklist} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
   
    
  );
}

export default App;
