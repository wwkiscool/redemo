import React from 'react'
import ReactDOM from 'react-dom';
// 留言板

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }
  deltemessage() {
    this.props.deletemessage(this.props.messageId)
  }
  // 鼠标移入显示删除按钮
  handleMouseOver() {
    ReactDOM.findDOMNode(this.refs.btns).style.display = 'block'
  }
  handleMouseOut() {
    ReactDOM.findDOMNode(this.refs.btns).style.display = 'none'
  }

  render() {
    let author = this.props.author;
    let message = this.props.message;
    let classes = 'list-group'
    return (
      <li className={classes} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        {author+ ':'}
        <span>{message.toString()}</span>
        <div className='right'>
          <button className='btn' onClick={this.deletemessage} ref='btns'>删除</button>
        </div>
      </li>
    )
  }
}

function MessageFooter() {
  return <li className='footer'>请不要搞事情</li>
}

class MessageList extends React.Component {
  render() {
    let messageList = this.props.data.map((listItem) => {
      return (
        <MessageItem
          messageId={listItem.id}
          author={listItem.author}
          key={listItem.id}
          message={listItem.message}
          deletemessage={this.props.deletemessage}
        ></MessageItem>
      )
    })
    return (
      <ul className='list'>
        {messageList}
        <MessageFooter></MessageFooter>
      </ul>
    )
  }
}

class MessageForm extends React.Component {
  constructor(){
    super()
    this.state={
      author: '',
      message: ''
    }
  }
  handleAuthor =(e)=> {
    this.setState({
      author: e.target.value
    })
  }
  handleTextChange= (e)=> {
    this.setState({
      message:e.target.value
    })
  }
  submitmessage =(e)=> {
    e.preventDefault();
    let author = this.state.author.trim();
    let message = this.state.message.trim();
    if (!message|| !author){
      return;
    }
    this.props.submitmessage({
      author,
      message
    })
    ReactDOM.findDOMNode(this.refs.message).value = '';
    ReactDOM.findDOMNode(this.refs.author).value = '';
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitmessage} className='form-title'>
          <div>
            <label for='author'>author</label>
            <div>
              <input type="text" ref='author' onChange={this.handleAuthor} />
            </div>
          </div>

          <div>
            <label for='message'>messgae</label>
            <div>
              <input type="text" ref='message' onChange={this.handleTextChange} />
            </div>
          </div>

          <div>
            <div>
              <input type="submit" value='确定' />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

class MeessageBox extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  getInitialState(){
    return {
      data: [
        {"id": '001',"author":'wwk1',"message": '肉1'},
        {"id": '002',"author":'wwk2',"message": '肉2'},
        {"id": '003',"author":'wwk3',"message": '肉3'}
      ]
    }
  }
  // 根据id删除留言
  handlemessageDelete(messageId) {
    let data = this.state.data;
    let oldData = data.filter((message) => {
      return message.id !== messageId;
    })
    this.setState({ oldData })
  }

  // 给新增的留言一个id--date
  generateId() {
    return Date.now();
  }
  // 新增留言
  handleSubmit(arg) {
    let data = this.getInitialState().data;
    let id = this.generateId();
    let author = this.generateId();
    let Data = data.concant([
      {
        'id': id,
        'author': author,
        "message": arg.message
      }
    ])
    this.setState({ Data })
  }

  render() {
    console.log('1', this.getInitialState())
    return (
      <div className='wrapper'>
        <h1 className='title'>pleace Message</h1>
        <MessageList data={this.getInitialState().data} deleteMessage={this.handlemessageDelete}></MessageList>
        <MessageForm submitmessage={this.handleSubmit}></MessageForm>
      </div>
    )
  }
}
export default MeessageBox 