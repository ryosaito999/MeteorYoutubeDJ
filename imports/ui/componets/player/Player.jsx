import YouTube from 'react-youtube'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { ServerRooms  } from '../../../api/ServerRooms.js'

export default class Player extends Component {
  let roomID = "abbb";
  upsertTestRoom(){
    ServerRooms.upsert({
      // Selector
      roomID: "1234",

    },

    {
    // Modifier
      $set:
      {
          playList: [],
          currentVideoId: "",
          currentVideoTime: "",
          isPlaying: false,
          userList: [],
          inviteLink: "abbb"
      }

    });
  }

  constructor(props){
    super(props);
    this.state = {
      currentVideoId: '',
      player: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onReady = this.onReady.bind(this);
    this.onChangeVideo = this.onChangeVideo.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
    this.onEndVideo = this.onEndVideo.bind(this)
  }




  verifyLink(url){
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
      return match[2];
    }

    else{
      return "";
    }
  }

  changeVideo(url){
    //use regex to check if youtube link and extract data
    //http://www.youtube.com/watch?v=u8nQa1cJyX8
    let youtube_id = this.verifyLink(url);

    //need to tell server what current video is


    if(youtube_id){
      this.setState({
          currentVideoId : youtube_id
      });
    }

    else{
      console.log("invalid url");

    }

  }

  handleSubmit(e){
    e.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.linkInput).value.trim();
    //submit video change to server


    this.changeVideo(text);
    //console.log("Link: "+ text);

  }

  onChangeVideo(videoId){

  }

  onPlayVideo(){

  }

  onPauseVideo(){

  }

  onEndVideo(){

  }



  render(){
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    //render black screen if no video is slected
    //render video if videoID exists
    return (
    <div>


      <YouTube
        videoId={this.state.currentVideoId}
        opts={opts}
        onReady={this.onReady}
      />




      <form id = "message-form" onSubmit = {this.handleSubmit}>
        <div className="form-group">
          <input type="text"
                id="link-input"
                ref="linkInput"
                className="form-control input-lg"
                placeholder="Enter Link Here"
          />
        </div>

        <div className="form-group text-center">
          <input type="submit"
                id="submit-video"
                className="btn btn-primary btn-lg btn-block"
                value="Login"
          />
        </div>
      </form>
    </div>
    );
  }

  onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();

  }

}
