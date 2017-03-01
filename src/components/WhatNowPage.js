import React, { Component } from 'react';

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <h1> Page Not Found </h1>
        <img className="food-desert" src={require('./../food-desert-bw-sm.jpg')}/>
        <p className="definition"> Oopsies. </p>
      </div>
    );
  }
}

export default NotFoundPage;
