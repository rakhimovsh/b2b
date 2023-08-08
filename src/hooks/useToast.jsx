import React, { useState, createContext, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContext = createContext();

const useToast = () => useContext(ToastContext);

const ToastProvider = ({ children }) => {
  const showToast = (message, type, options = {}) => {
    toast[type](message, options);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export { ToastProvider, useToast };