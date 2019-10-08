import React from 'react'


function Fancyborder(props) {
  return(
    <div className={'Fancyborder' + props.color}>
      {props.children}
    </div>
  )
}

function Dialog(props) {
  return (
    <Fancyborder color='blue'>
      <h1 className='Dialog-title'> 
        {props.title}
      </h1>
      <p>{props.children}</p>
    </Fancyborder>
  )
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      login: e.target.value
    })
  }
  handleSignUp = () => {
    alert(`welcome aboard, ${this.state.login}!`)
  }
  render() {
    return (
      <Dialog title='1' message='123'>
        <input type="text" value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>up</button>
      </Dialog>
    )
  }
}

export default SignUpDialog