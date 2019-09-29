import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  componentDidMount () {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timerId)
  }
  render() {
    return (
      <div>
        <div>123</div>
        <h2>it is {this.state.date.toLocaleTimeString("en-US", {hour12: false})}</h2>
      </div>
    )
  }
}
export default Clock
