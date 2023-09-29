import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import InputMask from 'react-input-mask';
import CountrySelect from '@components/CountrySelect';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@/hooks/useToast.jsx';
import { createProductRequest } from '@/redux/actions/application.js';
import phoneMasks from '../../data/phoneMasks.js';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';


const RequestForm = () => {
  const dispatch = useDispatch();
  const {productId} = useParams()
  const toast = useToast();
  const { createProduct } = useSelector((state) => state.application);
  const [isFormBtnDisabled, setIsFormBtnDisabled] = useState(false);
  const [phoneCode, setPhoneCode] = useState('+998');
  const [countryCode, setCountryCode] = useState('UZ');
  const {t} = useTranslation()

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formElements = evt.target.elements;
    const request = {
      name: formElements.name.value,
      phone_number: formElements.phone_number.value,
      lacation: formElements.lacation.value,
      text: formElements.text.value,
      product_id: productId || null,
      location: "UZ",
      email: formElements.email.value
    };
    if(request.name && request.phone_number && request.lacation && request.text && request.email) {
      dispatch(createProductRequest(request));
      evt.target.reset()
    } else {
      toast("Все поля формы должны быть заполнены", "warning", {position: "top-center"})
    }
  };

  useEffect(() => {
    if (createProduct.response) {
      toast("Заявка отправлена успешно", "success", {position: "top-center"})
    }
    setIsFormBtnDisabled(createProduct.loading);
  }, [createProduct.response]);
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ textAlign: 'start' }}>
        <p className={styles.contactForm_p}>{t('contactUs.form.clientName')}</p>
        <input
          name='name'
          className={styles.contactForm_name_input}
          type='text'
          placeholder={t('contactUs.form.clientName')}
        />
      </div>
      <div style={{ textAlign: 'start', width: '100%' }}>
        <p className={styles.contactForm_p}>{t('contactUs.form.country')}</p>
        <CountrySelect name='lacation' setPhoneNumber={setPhoneCode} setCountryCode={setCountryCode}/>
      </div>
      <div style={{ textAlign: 'start' }}>
        <p className={styles.contactForm_p}>{t('contactUs.form.phoneNumber')}</p>
        <InputMask
          name='phone_number'
          className={styles.contactForm_name_input}
          type='text'
          placeholder={phoneMasks[countryCode].replace(/#/gim, '_')}
          mask={`${phoneMasks[countryCode].replace(/9/gim, '\\9').replace(/#/gim, '9')} `}
        />
      </div>
      <div style={{ textAlign: 'start' }}>
        <p className={styles.contactForm_p}>{t('contactUs.form.email')}</p>
        <input
          name='email'
          className={styles.contactForm_name_input}
          type='email'
          placeholder={t('contactUs.form.email')}
        />
      </div>
      <div style={{ textAlign: 'start' }}>
        <p className={styles.contactForm_p}>{t('contactUs.form.product')}</p>
        <textarea
          name='text'
          className={styles.contactForm_textarea}
          cols='30'
          rows='2'
          placeholder={t('contactUs.form.description')}
        ></textarea>
      </div>
      <button disabled={isFormBtnDisabled} className={styles.contactForm_btn}>
      {t('contactUs.form.send')}
      </button>
    </form>
  );
};

export default RequestForm;
