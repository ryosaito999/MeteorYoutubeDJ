import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import {ServerRooms } from '../../api/ServerRooms.js'
export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
    }

    //need two on submit handlers
    // one for making a Room
    // one for joining a Room

  }


  makeRoom(){
    //alert("made room");
    //make a mongoDB entry for the room

    let roomObj =
    {
        roomName: "",
        users: [ "admin" ],
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
          console.log('_id: ' + result ); //this._id doesn't work either
          browserHistory.push('/room/'+result);
        }
      }
    );







  }

  joinRoom(){
    //for later
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

         <li><Link to="/bob" activeClassName="active">Bob</Link></li>
      </div>
    );
  }
}

MainPage.PropTypes = {

}
