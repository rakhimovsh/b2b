import axios from 'axios';
import { APP_API } from '@config';

export function api() {
  return  axios.create({
    baseURL: APP_API,
  });
}
export function getImage(url='') {
  if(url.startsWith('http') )return url;
  return APP_API + url
}