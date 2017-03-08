import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getProfile} from '../actions/index';

class Searchbar extends Component {
  constructor(props){
    super(props);

    this.state = {username: ''};
  }
  static contextTypes = {
    router: PropTypes.object
  };
  onFormSubmit(e){
    e.preventDefault();
    this.context.router.push(`/people/${this.state.username}`);
    // this.props.getProfile(this.state.username)
    //   .then(() => {
    //     this.context.router.push(`/people/${this.state.username}`);
    //   })
  }
  onInputChange(e){
    this.setState({username: e.target.value});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input value={this.state.username} onChange={this.onInputChange.bind(this)} placeholder="Search" />
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { person: 'test' }
}

export default connect(mapStateToProps, {getProfile: getProfile})(Searchbar);
