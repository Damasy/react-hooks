import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }

    // solve this context issue
    this.countUp = this.countUp.bind(this);
  }

  // method - must bind this context inside constructor to solve this context issue
  countUp() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className="container text-center mt-5">
        <div className="mt-3">{this.state.counter}</div>
        <button className="btn btn-primary" onClick={this.countUp}>Count Up</button>
      </div>
    )
  }
}
