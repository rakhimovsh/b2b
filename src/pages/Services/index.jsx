import React from 'react';
import {createSearchParams, useNavigate} from 'react-router-dom';
import { Services as ServicesArr } from '@/data/services.js';

import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const navigate = useNavigate();
  const {t} = useTranslation()
  const handleNavigateBtn = (serviceId) => {
    navigate({
      pathname: "/application",
      search: `?${createSearchParams({serviceId})}`
    })
  }
  const title = 'fefe'
  return (
    <div className={'container ' + styles.serviceContainer}>
      <h2 className={styles.serviceTitle}>{t('services.title')}-EMGU</h2>
      <div className={styles.serviceBox}>
        {ServicesArr.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <img className={styles.serviceImage} src={service.image} alt='service image' />
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceName}>{t(service.title)}</h3>
              {/* <h3 className={styles.serviceName}>{service.title}</h3> */}
              <h4 className={styles.servicePrice}>{t(service.amount)}</h4>
              <p className={styles.serviceText}>{t(service.desc)}</p>
            </div>
            <button onClick={() => handleNavigateBtn(service.id)} className={styles.serviceButton}>
              {t('services.serviceCard1.button')}
            </button>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Services;
