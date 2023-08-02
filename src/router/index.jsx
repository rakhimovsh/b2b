import { Route, Routes } from 'react-router-dom';
import MainLayout from '@layouts/mainLayout/index.jsx';
import Home from "@pages/Home/index.jsx";
import Producers from "@pages/Producers/index.jsx"
import Product from "@pages/Product/index.jsx"

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home/>}/>
        <Route path='/producers' element={<Producers />} />
        <Route path='/product' element={<Product />} />
      </Route>
    </Routes>
  );
};

export default Router;
