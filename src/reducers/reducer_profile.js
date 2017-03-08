import {FETCH_USER} from '../actions/index';

const INITIAL_STATE = {profile: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_USER:
      return {...state, profile: action.payload.data};
    default:
      return state;
  }
}
