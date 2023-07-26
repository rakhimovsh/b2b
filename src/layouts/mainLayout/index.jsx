import { Outlet } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
