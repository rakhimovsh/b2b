import axios from 'axios';
import { APP_API } from '@config';

export function api() {
  axios.create({
    baseURL: APP_API,
  });
}
