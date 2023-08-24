import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { ReactComponent as StarIcon } from '@assets/svg/StarSVG.svg';
import Social from '@components/Social';
import MailSvg from '@assets/svg/mailSvg.svg';
import PhoneIcon from '@assets/svg/phoneIcon.svg';
import RequestPopUp from './RequestPopUp';
import CallPopUp from './CallPopUp';
import { getCompanyById } from '@/redux/actions/company.js';
import { useTranslation } from 'react-i18next';

const CompanyContact = ({ companyId }) => {
  const [openMail, setOpenMail] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);
  const dispatch = useDispatch();
  const { singleCompany } = useSelector((state) => state.company);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    if (companyId) dispatch(getCompanyById(companyId));
  }, [companyId]);
  const toggleMail = () => {
    setOpenMail(!openMail);
  };
  const togglePhone = () => {
    setOpenPhone(!openPhone);
  };
  return (
    <>
      <div className={styles.companyContact}>
        <div className={styles.companyInfo}>
          <div>
            <img className={styles.companyImg} src={singleCompany.item?.image} alt='company logo' />
          </div>
          <div style={{ marginLeft: '15px', marginTop: '15px' }}>
            <h3 className={styles.companyName}>{singleCompany.item?.name}</h3>
            <p className={styles.companyProduct}>{singleCompany.item?.type_product?.translations[lang]?.name}</p>
            {/* <span className={styles.companyRating}>
              <StarIcon className={styles.companyStarIcon} /> 3.6 рейтинг
            </span>
            <Social company={singleCompany.item}/> */}
          </div>
        </div>
        <div>
          <button onClick={toggleMail} className={styles.mailButton}>
            <img style={{ marginRight: '6px' }} src={MailSvg} alt='mail icon' />
            Узнать оптовую цену
          </button>
          <button onClick={togglePhone} className={styles.phoneButton}>
            <img style={{ marginRight: '6px' }} src={PhoneIcon} alt='phone icon' />
            Связаться с продавцом
          </button>
        </div>
        <div className={styles.requestPopUp}>{openMail && <RequestPopUp closeMailModal={setOpenMail} />}</div>
      <div>{openPhone && <CallPopUp closePhoneModal={setOpenPhone} />}</div>
      </div>
     
    </>
  );
};

export default CompanyContact;
