import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import {ServerRooms } from '../../api/ServerRooms.js'
export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      createRoom: true,
    }

    //need two on submit handlers
    // one for making a Room
    // one for joining a Room

  }


  makeRoom(){
    var id = ""
    let roomObj =
    {
        roomName: "room-",
        userIdList: [ "admin" ],
        currentAdmin: "",
        createdAt: new Date(), // current time
        currentVideoId: "",
        isPlaying: false,
        currentVideoTime: 0,
        MessageList: [],

    };

    ServerRooms.insert(roomObj,
      function(error,result){
        if(error){
          alert(error);
        }

        else{
          ServerRooms.update({_id:result},
            {
              $set:{
                roomName: "room_"+result
              }
            });
          browserHistory.push('/room/'+result);
        }
      }
    );

  }

  joinRoom(){
    //for later
  }

  renderForm(){
    if(this.state.createRoom){
      return (
        <div class="form-group">
          <label class="control-label col-sm-2" for="email">Email:</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="email" placeholder="Enter email"/>
        </div>
      </div>
      );
    }

    else{
      return;
    }
  }

  render(){
    return (
        <div >
        <h1> Welcome </h1>
        <button onClick= {this.makeRoom}
                type = "button"
                className="btn btn-success">
                Make a Room
      </button>
        <button type="button"
                onClick= {this.joinRoom}
                className ="btn btn-info">
                Join a Room
        </button>
        {this.render}
      </div>
    );
  }
}

MainPage.PropTypes = {

}
