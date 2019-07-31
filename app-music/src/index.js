import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './components/App';
import $ from 'jquery';
import Popper from "popper.js";



const container = document.getElementById('app');

ReactDOM.render(<App/> , container);

