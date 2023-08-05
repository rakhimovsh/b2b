import { Route, Routes } from 'react-router-dom';
import MainLayout from '@layouts/mainLayout';
import Home from '@pages/Home';
import Producers from '@pages/Producers';
import Product from '@pages/Product';
import CompanyInfo from '@pages/CompanyInfo';
import NotFound from '@pages/404';
import ContactUs from '@pages/ContactUs';
import HowToBuyProduct from "@pages/HowToBuyProduct";
import ForCompanies from "@pages/ForCompanies/index.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/producers' element={<Producers />} />
        <Route path='/product' element={<Product />} />
        <Route path='/company/info/:companyId' element={<CompanyInfo />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/how-to-buy-product' element={<HowToBuyProduct />} />
        <Route path='/for-companies' element={<ForCompanies />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
