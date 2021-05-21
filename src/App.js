import React, { Component } from "react";
class App extends Component {
  state = {
    evenNumbers: [],
  };
  componentDidMount() {
    let array_set = [23, 445, 22, 678, 26, 89, 56, 35, 90, 2345];
    let even = array_set.filter((number) => number % 2 === 0);
    let evenNumbers = [...this.state.evenNumbers];
    for (let i = 0; i < even.length; i++) {
      evenNumbers[i] = even[i];
    }
    this.setState({ evenNumbers });
  }
  render() {
    return (
      <React.Fragment>
        <h1>even Numbes of above array:</h1>
        {this.state.evenNumbers.map((number) => {
          return <h2 key={number}>{number}</h2>;
        })}
      </React.Fragment>
    );
  }
}

export default App;
