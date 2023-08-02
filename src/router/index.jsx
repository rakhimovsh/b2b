import { Route, Routes } from 'react-router-dom';
import MainLayout from '@layouts/mainLayout/index.jsx';
import Home from '@pages/Home/index.jsx';
import CompanyInfo from '@pages/CompanyInfo/index.jsx';
import NotFound from '@pages/404/index.jsx';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/company/info/:companyId' element={<CompanyInfo />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
