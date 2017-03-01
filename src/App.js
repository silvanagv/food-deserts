import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';


class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
