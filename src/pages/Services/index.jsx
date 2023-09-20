import React from 'react';
import {createSearchParams, useNavigate} from 'react-router-dom';
import { Services as ServicesArr } from '@/data/services.js';

import styles from './styles.module.css';

const Services = () => {
  const navigate = useNavigate();

  const handleNavigateBtn = (serviceId) => {
    navigate({
      pathname: "/application",
      search: `?${createSearchParams({serviceId})}`
    })
  }
  return (
    <div className={'container ' + styles.serviceContainer}>
      <h2 className={styles.serviceTitle}>Сервисы-EMGU</h2>
      <div className={styles.serviceBox}>
        {ServicesArr.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <img className={styles.serviceImage} src={service.image} alt='service image' />
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceName}>{service.title}</h3>
              <h4 className={styles.servicePrice}>{service.amount}</h4>
              <p className={styles.serviceText}>{service.desc}</p>
            </div>
            <button onClick={() => handleNavigateBtn(service.id)} className={styles.serviceButton}>
              Получить услугу
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
