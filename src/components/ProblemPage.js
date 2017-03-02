import React, { Component } from 'react';

class ProblemPage extends Component {
  render() {
    return (
      <div>
        <h1> The Problem </h1>
        <div className="fixed-width">
          <img alt="Halal Food Cart" className="food-desert" src={require('./../halal-food-sm.jpg')}/>
          <p> "Food deserts" are typically low-income areas that have virtually no supermarkets. The closest thing to a grocery store, especially in urban areas, is often a deli or bodega. Studies have shown that these "deserts" are associated with higher levels of obesity and malnutrition, which can affect entire communities, including small children. Unsurprisingly, food deserts are also usually plagued by poverty.</p>
          <p> Nationwide, the USDA estimates that 23.5 million people, including 6.5 million children, live in low-income areas that are more than a mile from a supermarket.</p>
        </div>
      </div>
    );
  }
}

export default ProblemPage;
