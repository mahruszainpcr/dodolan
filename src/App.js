import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './page/Dashboard';
import NotFound from './page/NotFound';
import Home from './page/Home';
// Distributor
import FormInputProduk from './page/Distributor/FormInputProduk';
import KelolaDataDistributor from './page/Distributor/KelolaDataDistributor';
import ProdukDistributor from './page/Distributor/ProdukDistributor';
import PenagihanRetail from './page/Distributor/PenagihanRetail';
import Stock from './page/Distributor/Stock';
// Retail
import KelolaDataRetail from './page/Retail/KelolaDataRetail';
import ListProduk from './page/Retail/ListProduk';
import DetailProduk from './page/Retail/DetailProduk';


function App() {
  return (
   
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/home" exact component={Home} />
        <Route path="/FormInputProduk" exact component={FormInputProduk} />
        <Route path="/KelolaDataDistributor" exact component={KelolaDataDistributor} />
        <Route path="/ProdukDistributor" exact component={ProdukDistributor} />
        <Route path="/Stock" exact component={Stock} />
        <Route path="/KelolaDataRetail" exact component={KelolaDataRetail} />
        <Route path="/PenagihanRetail" exact component={PenagihanRetail} />
        <Route path="/ListProduk" exact component={ListProduk} />
        <Route path="/DetailProduk" exact component={DetailProduk} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
   
    
  );
}

export default App;
