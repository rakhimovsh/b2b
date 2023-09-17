import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Parser } from "html-to-react";
import Company from './components/Company';
import Products from './components/Products';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCompanyById } from '@/redux/actions/company';
import { useEffect, useState } from 'react';
import { ReactComponent as BusinessTypeIcon } from '@assets/svg/building-regular.svg';

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
      <div style={{display: openInfo === 1 ? 'block' : 'none'}} className={styles.infoBlock}>
        <p className={styles.infoText}>
          {htmlParser.parse(singleCompany.item?.translations[lang]?.description)}
        </p>
        <div className={styles.keyInfo}>
          <p className={styles.keyInfoTitle}>Key company info</p>
          <div className={styles.details}>
            <div className={styles.businessType}>
              <BusinessTypeIcon />
              <div>
                <p className={styles.infoItem}>Trader</p>
                <p style={{color: 'gray'}}>Business type</p>
              </div>
            </div>
            <div className={styles.businessType}>
              <BusinessTypeIcon />
              <div>
                <p className={styles.infoItem}>Uzbekistan</p>
                <p style={{color: 'gray'}}>Country</p>
              </div>
            </div>
            <div className={styles.businessType}>
              <BusinessTypeIcon />
              <div>
                <p className={styles.infoItem}>2023</p>
                <p style={{color: 'gray'}}>Year established</p>
              </div>
            </div>
            <div className={styles.businessType}>
              <BusinessTypeIcon />
              <div>
                <p className={styles.infoItem}>1-5</p>
                <p style={{color: 'gray'}}>Workers amount</p>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div style={{display: openInfo === 2 ? 'block' : 'none'}}>
        <Products length={singleCompany?.item?.products?.length} />
      </div>
      
    </div>
  );
};

export default CompanyInfo;
