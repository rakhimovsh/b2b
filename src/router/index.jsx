import { Route, Routes } from 'react-router-dom';
import ProductInfo from '../pages/ProductInfo';
import MainLayout from '@layouts/mainLayout';
import Home from '@pages/Home';
import Producers from '@pages/Producers';
import Product from '@pages/Product';
import CompanyInfo from '@pages/CompanyInfo';
import NotFound from '@pages/404';
import ContactUs from '@pages/ContactUs';
import HowToBuyProduct from "@pages/HowToBuyProduct";
import Application from '@pages/Aplication';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home/>}/>
        <Route path='/company' element={<Producers />} />
        <Route path='/product' element={<Product />} />
        <Route path='/company/info/:companyId' element={<CompanyInfo />} />
        <Route path='/company/product-info/:companyId' element={<ProductInfo />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/how-to-buy-product' element={<HowToBuyProduct />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/application' element={<Application />} />
      </Route>
    </Routes>
  );
};

export default Router;
