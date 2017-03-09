import axios from 'axios';

export const FETCH_USER = "FETCH_USER";
export const FETCH_VIDEOS = "FETCH_VIDEOS";

const API_KEY = "&key=AIzaSyBMzPmcl0Bc2vLa2O5a5Gn-843K-3x6BfM";
const CHANNEL_URL = "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forUsername=";
const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&channelId="

export function getProfile(username){
  const request = axios.get(`${CHANNEL_URL}${username}${API_KEY}`);
  return{
    type: FETCH_USER,
    payload: request
  };
}
export function fetchVideos(id){
  const request = axios.get(`${SEARCH_URL}${id}${API_KEY}`);
  return{
    type: FETCH_VIDEOS,
    payload: request
  };
}
