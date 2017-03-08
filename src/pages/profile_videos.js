import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchVideos} from '../actions/index';

class ProfileVideo extends Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.fetchVideos(this.props.queryId);
  }

  render(){
    if(!this.props.videos){
      return(
        <div>Loading...</div>
      )
    }
    return(
      <div>
        These are videos{console.log(this.props.videos)}
      </div>
    )
  }
}

function mapStateToProps(state){
  return { videos: state.videos.videos }
}

export default connect(mapStateToProps, {fetchVideos: fetchVideos})(ProfileVideo);
