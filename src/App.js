import React, { Component } from 'react';
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import FiltersBar from './components/FiltersBar'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <FiltersBar />
          <ProductList />
        </div>
      </div>
    );
  }
}

export default App;
