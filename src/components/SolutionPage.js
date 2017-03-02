import React, { Component } from 'react';

class SolutionPage extends Component {
  render() {
    return (
      <div>
        <h1> The Solution </h1>
        <div className="fixed-width">
          <img alt="Hands holding grapes" className="food-desert" src={require('./../strawberries-sm.jpg')}/>
          <p> The Healthy Food Financing Initiative was more than a victory for the food movement. Aimed in large part at low-income city neighborhoods, which tend to be disproportionately black and Latino, it was—and is—the Obama administration’s most visible policy designed to help poor people of color. The Healthy Food Financing Initiative has distributed more than $500 million to increase fresh food access.</p>
          <p> Nationwide, USDA estimates that 23.5 million people, including 6.5 million children, live in low-income areas that are more than a mile from a supermarket.</p>
        </div>
      </div>
    );
  }
}

export default SolutionPage;
