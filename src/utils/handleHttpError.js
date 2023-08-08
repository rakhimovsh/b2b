import axios from 'axios';
import { useToast } from '@/hooks/useToast.jsx';

export const handleHttpError = (error) => {
  const showToast = useToast();
  let errMeg
  if (axios.isCancel(error)) {
    errMeg = `Request canceled: ${error.message}`
  } else if (error.response) {
    const { status, data } = error.response;
    if (status >= 500) {
      errMeg = "Server error"
    }
  } else if (error.request) {
    if (error.request.status === 0) {
      errMeg= "You are offline. Please check your internet connection."
    } else {
      errMeg = `No response received. Status code: ${error.request.status}`
    }
  } else {
    errMeg = `Error: ${error.message}`
  }
  showToast(errMeg, 'error', { position: 'top-center' });
};
