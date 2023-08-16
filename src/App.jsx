import {useEffect} from "react";
import AOS from 'aos'
import './App.css';
import Router from './router';
import { ToastProvider } from '@/hooks/useToast.jsx';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </>
  );
}

export default App;
