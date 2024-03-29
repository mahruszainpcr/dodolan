import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
// import Loading from './component/Loading';
import * as serviceWorker from './serviceWorker';

require('dotenv').config();
ReactDOM.render( < Header / > , document.getElementById('header'));
ReactDOM.render( < Sidebar / > , document.getElementById('sidebar'));
ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();