import React, { Component } from 'react';

class SolutionPage extends Component {
  render() {
    return (
      <div>
        <h1> The Proposed Solution </h1>
        <div className="fixed-width">
          <img alt="Hands holding grapes" className="food-desert" src={require('./../strawberries-sm.jpg')}/>
          <p>  The Healthy Food Financing Initiative has distributed more than $500 million to increase fresh food access, and was more than a victory for the food movement. Aimed in large part at low-income city neighborhoods, which tend to be disproportionately black and Latino, it was—and is—the Obama administration’s most visible policy designed to help poor people of color.</p>
        </div>
      </div>
    );
  }
}

export default SolutionPage;
