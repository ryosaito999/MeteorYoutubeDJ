import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { ServerMessages  } from '../../../api/RoomMessages.js'
import Message from './Message.jsx'
import Player from '../player/Player.jsx'

class ChatApp extends Component {
  constructor(props){
      super(props);
      this.state = {
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.messageInput).value.trim();

    ServerMessages.insert({
      text,
      createdAt: new Date(), // current time
      username: this.props.currentUser.username,
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.messageInput).value = '';
  }

  getPlayerTime(){

  }

  renderTasks() {
    return this.props.messages.map((message) => (
      <Message
        key={message._id}
        message={message}
        username = {message.username}
        date = {message.createdAt}
      />
    ));
  }

  render(){
    return (
      <div>
        <ul>
          {this.renderTasks()}
        </ul>
        <form id = "message-form" onSubmit = {this.handleSubmit}>
          Enter Message here
          <div className="form-group">
            <input type="text"
                  id="message-input"
                  ref="messageInput"
                  className="form-control input-lg"
                  placeholder="Enter message here"/>
          </div>

          <div className="form-group text-center">
            <input type="submit"
                  id="submit-button"
                  className="btn btn-primary btn-lg btn-block"
                  value="Login" />
          </div>
        </form>
      </div>
    );
  }

}

ChatApp.propTypes = {
  messages: PropTypes.array.isRequired,
};


export default createContainer(() => {
  return {
    messages: ServerMessages.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, ChatApp);
