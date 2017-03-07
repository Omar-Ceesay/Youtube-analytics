import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {getProfileByUsername} from '../actions/index';

class ProfilePage extends Component{
  constructor(props){
    super(props);
    console.log(this.props.getProfileByUsername(this.props.params.id));
    this.state = {
      person: [this.props.getProfileByUsername(this.props.params.id)]
    }
  }
  componentWillMount(){
  }

  render(){
    return(
      <div>{this.state.person}</div>
    )
  }
}

function mapStateToProps(state){
  return {profile: state.profile.profile};
}

export default connect(mapStateToProps, {getProfileByUsername: getProfileByUsername})(ProfilePage);
