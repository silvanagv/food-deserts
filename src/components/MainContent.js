import React, { Component } from 'react';

class MainContent extends Component {
  render() {
    return (
      <div>
        <h1> Food Deserts </h1>
        <img className="food-desert" src={require('./../food-desert-bw-sm.jpg')}/>
        <p className="definition"> The USDA defines a food desert as a “low-access community,” at least 500 people and/or at least 33 percent of the census tract's population must reside more than one mile from a supermarket or large grocery store (for rural census tracts, the distance is more than 10 miles). </p>
      </div>
    );
  }
}

export default MainContent;
