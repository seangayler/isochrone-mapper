import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './common/Navbar';
import Home from './home/Home';

import './App.css';

function App(props) {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;