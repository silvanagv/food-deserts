import React, { Component } from 'react';

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <h1> What Now? </h1>
        <div className="fixed-width">
        <img alt="food desert" className="food-desert" src={require('./../lemon-drink-sm.jpg')}/>
        <p>If people can’t afford healthier foods, then it would be reasonable to think that just giving them a better store wouldn’t solve their problems. But a study published by researchers at the University of Pennsylvania found that the education of the shoppers was much more predictive than their incomes. Poorer families bought less healthy food than richer ones. But a bigger gap was found between families with and without a college education. Those results suggest that improving people’s diets will require both making food accessible and affordable and also changing people’s perceptions and habits about diet and health.</p>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
