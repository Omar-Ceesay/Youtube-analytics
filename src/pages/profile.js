import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import ProfileVideo from './profile_videos';

import {getProfile} from '../actions/index';

class ProfilePage extends Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.getProfile(this.props.params.id);
  }
  componentDidMount(){
  }

  render(){
    if(!this.props.profile){
      return(
        <div>Loading...</div>
      )
    }
    return(
      <div>{console.log(this.props.profile)}
        <div className="container">
          <img className="col-xs-2" src={this.props.profile.items[0].snippet.thumbnails.default.url}></img>
          <h2 className="col-xs-4">{this.props.profile.items[0].snippet.title}<br/><h4 className="col-xs-4">Subscribers: {this.props.profile.items[0].statistics.subscriberCount}</h4></h2>
        </div>
          <Link to="/" className="btn btn-warning">Go Back</Link>
        <ProfileVideo queryId={this.props.profile.items[0].id}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { profile: state.profile.profile }
}

export default connect(mapStateToProps, {getProfile: getProfile})(ProfilePage);
