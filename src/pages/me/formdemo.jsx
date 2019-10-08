import React from 'react'
// 提交表单
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      value:event.target.value
    })
    console.log('1',event.target.type)
  }
  handleSubmit = (event) => {
    
    alert('value'+ this.state.value)
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value='Submit' />
      </form>
    )
  }
}

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:'333'};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    alert('--'+ this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="123">1</option>
            <option value="222">2</option>
            <option selected value="333">3</option>
          </select>
        </label>
        <input type="submit" value='提交' />
      </form>
    )
  }
}

class Reservation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isGoing:true,
      numberOfGuests:2
    }
  }
  handleInputChnage = (event) => {
    const target = event.target
    const value = target.type == 'checkbox' ? target.checked:target.value;
    const name = target.name;
    this.setState({
      [name]:value
    })
  }

  render(){
    return (
      <form>
        <label>
          <input type="checkbox" name='isGoing' checked={this.state.isGoing} onChange={this.handleInputChnage} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    )
  }
}

export{ Input, Select, Reservation }