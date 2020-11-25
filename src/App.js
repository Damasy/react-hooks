import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  countUp = () => {
    this.setState({
      counter: ++this.state.counter
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.countUp}>Count Up</button>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}
