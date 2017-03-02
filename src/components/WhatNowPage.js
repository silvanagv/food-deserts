import React, { Component } from 'react';

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <h1> What Now? </h1>
          <img alt="food desert" className="food-desert" src={require('./../veggies.jpg')}/>
        <p> Since education is the biggest indicator of likelihood of buying healthy food, not presence or absence of grocery stores, perhaps the road to healthier eating for all requires a longer-term approach that starts earlier in life. Instead of opening more grocery stores, perhaps providing cooking classes to children that show how a healthy diet can be tasty, as well as nutritious, would lead to better results.</p>
        <p> Additionally, another reason why healthy eating is such a challenge for many working families is a lack of time and/or energy. As such, "magic bullet" solutions such as creating grocery stores may not be enough. </p>
      </div>
    );
  }
}

export default NotFoundPage;
