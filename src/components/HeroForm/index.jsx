import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import {useSearchParams} from "react-router-dom";
import CountrySelect from '@components/CountrySelect/index.jsx';
import { createApplicationForPlacement } from '@/redux/actions/application.js';
import { useToast } from '@/hooks/useToast.jsx';
import PhoneMasks from '@/data/phoneMasks.js';
import {Services} from "@/data/services.js";
import styles from './styles.module.css';
import {ReactComponent as IconDown} from '@assets/svg/chevron-down.svg'
import { useTranslation } from 'react-i18next';


const HeroForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { applicationForPlacement } = useSelector((state) => state.application);
  const [isFormBtnDisabled, setIsFormBtnDisabled] = useState(false);
  const [phoneCode, setPhoneCode] = useState('+998');
  const [countryCode, setCountryCode] = useState('UZ');
  const [searchParams, setSearchParams] = useSearchParams();
  const serviceId = +searchParams.get('serviceId') || 1;
  const {t} = useTranslation()

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formElements = evt.target.elements;
    const request = {
      name: formElements.name.value,
      phone_number: formElements.phone_number.value,
      location: formElements.location.value,
      company_name: formElements.company_name.value,
      email: formElements.email.value,
      tariflar: Services.find(s => s.id === +formElements.rates.value)?.title
    };
    if (request.name && request.phone_number && request.location && request.company_name && request.email && request.tariflar) {
      dispatch(createApplicationForPlacement(request));
      evt.target.reset();
    } else {
      toast('Все поля формы должны быть заполнены', 'warning', { position: 'top-center' });
    }
  };
  useEffect(() => {
    if (applicationForPlacement.response) {
      toast('Заявка отправлена успешно', 'success', { position: 'top-center' });
    }
    setIsFormBtnDisabled(applicationForPlacement.loading);
  }, [applicationForPlacement.response]);
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h3 className={styles.heroForm_title}>
        {' '}
        {t('home.hero.form.title')}
      </h3>
      <div className={styles.selectBox} style={{ textAlign: 'start' }}>
        <select name='rates' defaultValue={serviceId}>
          {
            Services.map(el => (
              <option key={el.id} value={el.id} >{t(el.title)}</option>
              
            ))
          }
          
        </select>
        <IconDown className={styles.selectIcon} />
      </div>
      <div style={{ textAlign: 'start' }}>
        <p className={styles.formInput_name}>{t('home.hero.form.clientName')}</p>
        <input name='name' type='text' placeholder={t('home.hero.form.clientName')} className={styles.formClient_name} />
      </div>
      <div style={{ textAlign: 'start', width: '100%' }}>
        <p className={styles.formInput_name}>{t('home.hero.form.country')}</p>
        <CountrySelect
          name='location'
          setPhoneNumber={setPhoneCode}
          setCountryCode={setCountryCode}
        />
      </div>
      <div style={{ textAlign: 'start' }}>
        <p className={styles.formInput_name}>{t('home.hero.form.phoneNumber')}</p>
        <InputMask
          name='phone_number'
          type='text'
          placeholder={PhoneMasks[countryCode].replace(/#/gim, '_')}
          className={styles.formClient_name}
          mask={`${PhoneMasks[countryCode].replace(/9/gim, '\\9').replace(/#/gim, '9')} `}
        />
      </div>
      <div style={{ textAlign: 'start' }}>
        <p className={styles.formInput_name}>{t('home.hero.form.email')}</p>
        <input
          name='email'
          type='email'
          placeholder={t('home.hero.form.email')}
          className={styles.formClient_name}
        />
      </div>
      <div style={{ textAlign: 'start' }}>
        <p className={styles.formInput_name}>{t('home.hero.form.companyName')}</p>
        <input
          name='company_name'
          type='text'
          placeholder={t('home.hero.form.companyName')}
          className={styles.formClient_name}
        />
      </div>

      <button type='submit' disabled={isFormBtnDisabled} className={styles.heroForm_button}>
        {t('home.hero.form.send')}
      </button>
    </form>
  );
};

export default HeroForm;
