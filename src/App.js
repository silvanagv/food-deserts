import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';


class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
