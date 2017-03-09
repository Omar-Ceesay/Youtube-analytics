import {FETCH_VIDEOS} from '../actions/index';

const INITIAL_STATE = {videos: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_VIDEOS:
      return {...state, videos: action.payload.data.items};
    default:
      return state;
  }
}
