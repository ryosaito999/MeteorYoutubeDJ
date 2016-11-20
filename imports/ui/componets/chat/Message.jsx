import React, { Component, PropTypes } from 'react'
import dateFormat from  'dateformat'
export default class Message extends Component {
  constructor(props){
      super(props);
      this.state = {
      }
  }

  render(){
    let date = dateFormat(this.props.date , "dddd, mmmm dS, yyyy, h:MM:ss TT");

    return (

        <li>{date + ":   " + this.props.username +" -> " +  this.props.message.text}</li>
    );
  }

}

Message.PropTypes = {
  message: PropTypes.object.isRequired,

}
