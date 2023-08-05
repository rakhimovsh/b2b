import Company from './components/Company';
import Products from './components/Products';

const CompanyInfo = () => {
  return (
    <div className='container'>
      {/*<Breadcrumb/>*/}
      <Company />
      <Products />
    </div>
  );
};

export default CompanyInfo;
