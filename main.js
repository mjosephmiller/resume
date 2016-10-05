import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Sidebar from "./sidebar.jsx"
import Header from "./Header.jsx"


ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
ReactDOM.render(<Header />, document.getElementById('header'));
