import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import axios from 'axios'
import { BrowserRouter as Router,
Route } from "module";

ReactDOM.render(<Router><Route path='/' component={App} /></Router>, document.getElementById('root'));
