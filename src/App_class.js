import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      title: ''
    }

    // solve this context issue
    this.countUp = this.countUp.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
  }

  componentDidMount() {
    console.log('mounted')
  }

  componentDidUpdate() {
    console.log('updated')
    document.title = this.state.title
    document.title = `You clicked ${this.state.counter} times`
  }

  // method - must bind this context inside constructor to solve this context issue
  countUp() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeTitle() {
    this.setState({
      title: 'Welcome to React Hooks'
    })
  }

  render() {
    return (
      <div className="container text-center mt-5">
        <div className="mt-3">{this.state.counter}</div>
        <button className="btn btn-primary" onClick={this.countUp}>Count Up</button>
        <button className="btn btn-primary" onClick={this.changeTitle}>Change Title</button>
      </div>
    )
  }
}
