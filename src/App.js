import React, { Component } from 'react';
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'
import FilterList from './components/FilterList'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FilterList />
        <ProductCard />
      </div>
    );
  }
}

export default App;
