import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {
  state = {
    count:0 // * data want to change dynamically
  }
  add = ()=>{
    console.log('add');
  };
  minus = () => {
    console.log('minus');
  }
  render() {
  // * add works only when button is pressed, add() will be prompted immediately
  return <div>
    <h1>The number is : {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
  </div>
  }
}

export default App;
