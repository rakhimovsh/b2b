import {Route, Routes, useLocation} from 'react-router-dom';
import {useEffect} from "react";

import ProductInfo from '@pages/ProductInfo';
import MainLayout from '@layouts/mainLayout';
import Home from '@pages/Home';
import Producers from '@pages/Producers';
import Product from '@pages/Product';
import CompanyInfo from '@pages/CompanyInfo';
import NotFound from '@pages/404';
import ContactUs from '@pages/ContactUs';
import HowToBuyProduct from "@pages/HowToBuyProduct";
import Application from '@pages/Aplication';
import AllCompanies from '@pages/AllCompanies';
import About from '@pages/About';
import ForCompanies from '@pages/ForCompanies';
import Payment from '@pages/Payment';
import ReturnPolicy from '@pages/ReturnPolicy';
import FAQ from '@pages/FAQ';

const Router = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/company' element={<Producers />} />
        <Route path='/company/info/:companyId' element={<CompanyInfo />} />
        <Route path='/company/product-info/:productId' element={<ProductInfo />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/how-to-buy-product' element={<HowToBuyProduct />} />
        <Route path='/for-companies' element={<ForCompanies />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/return-policy' element={<ReturnPolicy />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/application' element={<Application />} />
        <Route path='/news' element={<AllCompanies />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
