import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import {createContainer}  from 'meteor/react-meteor-data';
import {ServerRooms}  from '../../api/ServerRooms.js'
import Player from '../componets/player/Player.jsx'

class RoomTemplate extends Component {


  constructor(props){
    super(props);

    this.state = {
      roomInfoObj:""
    }

  }

  checkUndefined(obj){
    if(obj === 'undefined'){
      return true;
    }

    return false;
  }


  render(){
    if(this.props.currentRoom !== undefined){
      return(

        //insert Chat App, Youtube Video, and button to show link
        <div>
            <h1>Welcome to {this.props.currentRoom.roomName}</h1>
            <Player />
        </div>
      );
    }

    else{
      return(
        <div>
          Loading...
        </div>
      );
    }
  }
}

RoomTemplate.PropTypes = {
  currentRoom: PropTypes.object.isRequired
}


export default createContainer( ({params}) => {
  let tmpObj =  ServerRooms.findOne({_id: params.id});
  return {
    currentRoom: tmpObj
  };
}, RoomTemplate);
