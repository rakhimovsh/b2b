import { Route, Routes } from 'react-router-dom';
import ProductInfo from '../pages/ProductInfo';
import MainLayout from '@layouts/mainLayout';
import Home from '@pages/Home';
import Producers from '@pages/Producers';
import Product from '@pages/Product';
import CompanyInfo from '@pages/CompanyInfo';
import NotFound from '@pages/404';
import ContactUs from '@pages/ContactUs';
import HowToBuyProduct from '@pages/HowToBuyProduct';
import ForCompanies from '@pages/ForCompanies';
import Payment from '@pages/Payment';
import ReturnPolicy from '@pages/ReturnPolicy';
import FAQ from '@pages/FAQ';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/company' element={<Producers />} />
        <Route path='/product' element={<Product />} />
        <Route path='/company/info/:companyId' element={<CompanyInfo />} />
        <Route path='/company/product-info/:companyId' element={<ProductInfo />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/how-to-buy-product' element={<HowToBuyProduct />} />
        <Route path='/for-companies' element={<ForCompanies />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/return-policy' element={<ReturnPolicy />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
