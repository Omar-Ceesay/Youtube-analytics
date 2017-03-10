import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import ProfileVideo from './profile_videos';

import {getProfile, fetchVideos} from '../actions/index';

class ProfilePage extends Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.getProfile(this.props.params.id);
  }

  render(){
    if(!this.props.profile){
      return(
        <div>Loading...</div>
      )
    }
    {this.props.fetchVideos(this.props.profile.items[0].id)}
    return(
      <div>{console.log(this.props.profile)}
        <div className="container">
          <div className="col-md-12 text-center">
            <h2 className="">{this.props.profile.items[0].snippet.title}
              <img className="pull-right profileImg" src={this.props.profile.items[0].snippet.thumbnails.default.url}></img>
              <h4 className="">Subscribers: {this.props.profile.items[0].statistics.subscriberCount}
              </h4>
            </h2>
          </div>
        </div>
        <div className="container">
          <Link to="/" className="btn btn-warning">Go Back</Link>
          <ProfileVideo queryId={this.props.profile.items[0].id}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { profile: state.profile.profile }
}

export default connect(mapStateToProps, {getProfile: getProfile, fetchVideos: fetchVideos})(ProfilePage);
