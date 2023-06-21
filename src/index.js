import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';
import App from './componentes/App.jsx'
import Home from './componentes/Home.jsx'

document.body.innerHTML = '<div id="app"></div>';

ReactDOM.render(<Home />, document.getElementById('app'));