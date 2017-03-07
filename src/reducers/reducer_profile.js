import {FETCH_USER, FETCH_USERBYUSERNAME} from '../actions/index';

const INITIAL_STATE = {profile: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_USER:
      return {...state, profile: action.payload};
    case FETCH_USERBYUSERNAME:
      return {...state, profile: action.payload}
    default:
      return state;
  }
}
