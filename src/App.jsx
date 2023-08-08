import './App.css';
import Router from './router';
import { ToastProvider } from '@/hooks/useToast.jsx';

function App() {
  return (
    <>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </>
  );
}

export default App;
