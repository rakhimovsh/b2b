import { useDispatch, useSelector } from 'react-redux';
import Company from './components/Company';
import Products from './components/Products';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCompanyById } from '@/redux/actions/company';
import { useEffect } from 'react';

const CompanyInfo = () => {
  // const {i18n} = useTranslation()
  // const lang = i18n.language  
  const {companyId} = useParams()
  console.log(companyId);
  const dispatch = useDispatch()
  const {singleCompany} = useSelector(state => state.company)
  useEffect(() => {dispatch(getCompanyById(companyId))}, [companyId])
  return (
    <div className='container'>
      {/*<Breadcrumb/>*/}
      <Company />
      <Products length={singleCompany?.item?.products?.length} />
    </div>
  );
};

export default CompanyInfo;
