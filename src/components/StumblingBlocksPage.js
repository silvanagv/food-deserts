import React, { Component } from 'react';

class StumblingBlocksPage extends Component {
  render() {
    return (
      <div>
        <h1> Stumbling Blocks </h1>
        <div className="fixed-width">
        <img alt="Cooking on an open hearth" className="food-desert" src={require('./../cooking-open-hearth-sm.jpg')}/>
        <p> A report from Department of Agriculture researchers presented to Congress in 2009 actually showed more grocery stores in poor neighborhoods. In 2012, USDA researchers crunched the data again and found once more that low-income neighborhoods had more—not fewer—grocery stores.</p>
        </div>
      </div>
    );
  }
}

export default StumblingBlocksPage;
