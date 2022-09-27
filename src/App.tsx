import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Inventory from './components/Inventory';

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <Inventory />
    </div>
  );
}

export default App;
