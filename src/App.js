import React from 'react';
import './App.css';

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//     this.handleClick = this.handleClick.bind(this)

//   }

//   handleClick() {
//     console.log('this', this)
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }))
//   }

//   // handleClick = () => {
//   //   console.log('this', this)
//   //   this.setState(prevState => ({
//   //     isToggleOn: !prevState.isToggleOn
//   //   }))
//   // }
//   render() {
//     return(
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     )
//   }
// }

class Popper extends React.Component{
  constructor(){
      super();
      this.state = {name:'Hello world!'};
  }
  
  preventPop = (name, e) => {    //事件对象e要放在最后
      e.preventDefault();
      alert(name);
  }
  
  render(){
      return (
          <div>
              <p>hello</p>
              {/* Pass params via bind() method. */}
              {/* <div onClick={this.preventPop.bind(this,this.state.name)}>Click</div> */}
              <div onClick={(e) => this.preventPop(this.state.name,e)}>Click</div>
          </div>
      );
  }
}

export default Popper
