import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './page/Dashboard';
import NotFound from './page/NotFound';
import Home from './page/Home';
import FormInputProduk from './page/FormInputProduk';
import KelolaDataDistributor from './page/Distributor/KelolaDataDistributor';
import ProdukDistributor from './page/Distributor/ProdukDistributor';
import PenagihanRetail from './page/Distributor/PenagihanRetail';


function App() {
  return (
   
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/home" exact component={Home} />
        <Route path="/FormInputProduk" exact component={FormInputProduk} />
        <Route path="/KelolaDataDistributor" exact component={KelolaDataDistributor} />
        <Route path="/ProdukDistributor" exact component={ProdukDistributor} />
        <Route path="/PenagihanRetail" exact component={PenagihanRetail} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
   
    
  );
}

export default App;
