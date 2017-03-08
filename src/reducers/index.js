import { combineReducers } from 'redux';
import ProfileReducer from './reducer_profile';
import VideoReducer from './reducer_video';

const rootReducer = combineReducers({
  profile: ProfileReducer,
  videos: VideoReducer
});

export default rootReducer;
