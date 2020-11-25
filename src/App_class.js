import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      title: ''
    }

    this.amount = React.createRef()

    // solve this context issue
    this.countUp = this.countUp.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
  }

  componentDidMount() {
    console.log('mounted')
    console.log(this.amount.current)
    this.amount.current.focus()
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
        <input ref={this.amount} />
        <div className="mt-3">{this.state.counter}</div>
        <button className="btn btn-primary mx-2 mt-3" onClick={this.countUp}>Count Up</button>
        <button className="btn btn-success mx-2 mt-3" onClick={this.changeTitle}>Change Title</button>
      </div>
    )
  }
}
