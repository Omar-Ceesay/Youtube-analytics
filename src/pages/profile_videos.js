import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import IndivVideo from './indiv_video';

import {fetchVideos} from '../actions/index';

class ProfileVideo extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchVideos(this.props.queryId);
  }
  // renderVideos(){
  //   return this.props.videos.map((video) => {
  //     return (
  //       <li className="list-group-item" key={video.id.videoId}>
  //         <div className='embed-container'>
  //           <iframe src={'http://www.youtube.com/embed/'+{video.id.videoId}} frameborder='0' allowFullScreen></iframe>
  //         </div>
  //       </li>
  //     )
  //   })
  // }

  render(){
    if(!this.props.videos){
      return(
        <div>Loading...</div>
      )
    }
    return(
      <div>
        {console.log(this.props.videos)}
        <IndivVideo video={this.props.videos[0]} />
        <IndivVideo video={this.props.videos[1]} />
        <IndivVideo video={this.props.videos[2]} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return { videos: state.videos.videos }
}

export default connect(mapStateToProps, {fetchVideos: fetchVideos})(ProfileVideo);
