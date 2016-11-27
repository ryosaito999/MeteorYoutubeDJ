import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import {createContainer}  from 'meteor/react-meteor-data';
import {ServerRooms}  from '../../api/ServerRooms.js'
import Player from '../componets/player/Player.jsx'
import ClientList from '../componets/ClientList/ClientList.jsx'
class RoomTemplate extends Component {

  constructor(props){
    super(props);
    this.state = {
      roomInfoObj:"",
      roomCreator:false
    }

    let isAdmin =   Session.get('adminCreate');

    if(isAdmin){
      this.state.roomCreator = true;
      console.log("hi admin");

    }

    else{
      console.log("came from somewhere else");
    }
  }

  render(){
    let currentRoom = this.props.currentRoom;
    if(this.props.currentRoom !== undefined){
      return(

        //insert Chat App, Youtube Video, and button to show link
        <div>
            <h1>Welcome to {currentRoom.roomName}</h1>
            <ClientList Clients={currentRoom.userIdList}/>
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
    currentRoom: tmpObj,
    currentRoomId: params.id

  };
}, RoomTemplate);
