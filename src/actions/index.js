import axios from 'axios';

export const FETCH_USER = "FETCH_USER";
export const FETCH_USERBYUSERNAME = "FETCH_USERBYUSERNAME";

const API_KEY = "&key=AIzaSyBMzPmcl0Bc2vLa2O5a5Gn-843K-3x6BfM";
const ROOT_URL = "https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername="

export function getProfile(username){
  const request = axios.get(`${ROOT_URL}${username}${API_KEY}`);
  return{
    type: FETCH_USER,
    payload: request
  };
}
export function getProfileByUsername(username){
  const request = axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${username}${API_KEY}`);
  return{
    type: FETCH_USERBYUSERNAME,
    payload: request
  };
}
