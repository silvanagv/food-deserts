import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Menu from './components/Menu';


class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <MainContent/>
        <Footer />
      </div>
    );
  }
}

export default App;
