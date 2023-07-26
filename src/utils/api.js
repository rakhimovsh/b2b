import axios from "axios";
import {APP_API} from "../config/index.js";


export function api() {
  axios.create({
    baseURL: APP_API,
  });
}