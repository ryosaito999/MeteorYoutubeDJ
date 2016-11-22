import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data';
import {ServerRooms } from '../../api/ServerRooms.js'

class RoomTemplate extends Component {


  constructor(props){
    super(props);
    console.log(this.props.currentRoom);
    console.log("ID: " + this.props.currentRoom._id);


    this.state = {
      roomInfoObj:""
    }
  }


  render(){
    return (
      <div >
        Welcome to room {this.props.currentRoom._id}
      </div>
    );
  }
}

RoomTemplate.PropTypes = {

}


export default createContainer( ({params}) => {
  //console.log(params);
  let tmpObj =  ServerRooms.findOne({_id: params.id});

  return {
    currentRoom: tmpObj
  };
}, RoomTemplate);
