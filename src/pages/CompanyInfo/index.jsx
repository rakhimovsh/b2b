import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Parser } from "html-to-react";
import Company from './components/Company';
import Products from './components/Products';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCompanyById } from '@/redux/actions/company';
import { useEffect, useState } from 'react';

const CompanyInfo = () => {
  const [openInfo, setOpenInfo] = useState(1)
  const {companyId} = useParams()
  const dispatch = useDispatch()
  const {singleCompany} = useSelector(state => state.company)
  const {i18n} = useTranslation()
  const lang = i18n.language;
  const htmlParser = new Parser();
  useEffect(() => {dispatch(getCompanyById(companyId))}, [companyId])
  return (
    <div className='container'>
      {/*<Breadcrumb/>*/}
      <Company />
      <div className={styles.companyDetails}>
        <p onClick={() => setOpenInfo(1)} className = {openInfo === 1 ? styles.active : styles.notActive} >ИНФОРМАЦИЯ</p>
        <p onClick={() => setOpenInfo(2)} className = {openInfo === 2 ? styles.active : styles.notActive} >ТОВАРЫ ({singleCompany?.item?.products?.length})</p>
      </div>
      <p style={{display: openInfo === 1 ? 'block' : 'none'}} className={styles.infoText}>
        {htmlParser.parse(singleCompany.item?.translations[lang]?.description)}
      </p >
      <div style={{display: openInfo === 2 ? 'block' : 'none'}}>
        <Products length={singleCompany?.item?.products?.length} />
      </div>
      
    </div>
  );
};

export default CompanyInfo;
