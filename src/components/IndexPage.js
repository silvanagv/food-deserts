import React from 'react';

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <h1> Food Deserts </h1>
          <div className="fixed-width">
            <img alt="food desert" className="food-desert" src={require('./../food-desert-bw-sm.jpg')}/>
            <p> The USDA defines a food desert as a “low-access community,” at least 500 people and/or at least 33 percent of the census tract's population must reside more than one mile from a supermarket or large grocery store (for rural census tracts, the distance is more than 10 miles). </p>
            <p> Read on to find out more about them.</p>
        </div>
      </div>
    );
  }
}

export default IndexPage;
