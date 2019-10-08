import React from 'react';

// 注册组件
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>the water would boil.</p>
  }
  return <p>the water would not boil</p>
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
// 注册组件
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '' }
  }

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>enter temperature in {scaleNames[scale]}:</legend>
        <input type="text" value={temperature} onChange={this.handleChange} />
        {/* <BoilingVerdict celsius={parseFloat(temperature)} /> */}
      </fieldset>
    )
  }
}


function toCelsius(fahrenheit) { // 华氏转摄氏
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) { // 摄氏转华氏
  return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }
  handleCelsiusChange = (temperature) => {
    this.setState({
      scale: 'c',
      temperature
    })
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({
      scale: 'f',
      temperature
    })
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />

      </div>
    );
  }
}

export default Calculator