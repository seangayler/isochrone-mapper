import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './common/Navbar';

import './App.css';

function App(props) {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;