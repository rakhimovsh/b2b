import { Route, Routes } from 'react-router-dom';
import MainLayout from '@layouts/mainLayout/index.jsx';
import Home from "@pages/Home/index.jsx";
import Producers from "@pages/Producers/index.jsx"
import Product from "@pages/Product/index.jsx"
import CompanyInfo from '@pages/CompanyInfo/index.jsx';
import NotFound from '@pages/404/index.jsx';
import ProductInfo from '../pages/ProductInfo';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home/>}/>
        <Route path='/company' element={<Producers />} />
        <Route path='/product' element={<Product />} />
        <Route path='/company/info/:companyId' element={<CompanyInfo />} />
        <Route path='/company/product-info/:companyId' element={<ProductInfo />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
