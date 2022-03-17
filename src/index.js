import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';

import './assets/styles/general.scss'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

