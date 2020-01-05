import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './page/Dashboard';
import NotFound from './page/NotFound';
import Home from './page/Home';
import FormInputProduk from './page/FormInputProduk';

function App() {
  return (
   
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/home" exact component={Home} />
        <Route path="/FormInputProduk" exact component={FormInputProduk} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
   
    
  );
}

export default App;
