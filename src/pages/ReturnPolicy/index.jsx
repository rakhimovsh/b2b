import styles from './styles.module.css';
import ContactUs from '@components/ContactUs';

import Shield from '@assets/images/shield.png';
import { useTranslation } from 'react-i18next';

const ReturnPolicy = () => {
  const {t} = useTranslation()
  return (
    <div className={'container ' + styles.container}>
      <aside className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('termsConditions.title')}</h2>
          <p>{t('termsConditions.data')}</p>
          <p>{t('termsConditions.text')}</p>
          {/* <img className={styles.img} src={Shield} alt='shield' /> */}
        </div>
        <h2 style={{marginBottom: '20px'}}>{t('termsConditions.interNDef')}</h2>
        <h2>{t('termsConditions.inter')}</h2>
        <p>{t('termsConditions.interText')}</p>
        <h2 style={{marginTop: '10px'}}>{t('termsConditions.defen')}</h2>
        <p style={{marginBottom: '10px'}}>{t('termsConditions.defenText')}</p>
        <ul>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('termsConditions.mainList.item1.strong')} </strong> {t('termsConditions.mainList.item1.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('termsConditions.mainList.item2.strong')} </strong> {t('termsConditions.mainList.item2.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('termsConditions.mainList.item3.strong')} </strong> {t('termsConditions.mainList.item3.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('termsConditions.mainList.item4.strong')} </strong> {t('termsConditions.mainList.item4.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('termsConditions.mainList.item5.strong')} </strong> {t('termsConditions.mainList.item5.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('termsConditions.mainList.item6.strong')} </strong> {t('termsConditions.mainList.item6.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('termsConditions.mainList.item7.strong')} </strong> {t('termsConditions.mainList.item7.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('termsConditions.mainList.item8.strong')} </strong> {t('termsConditions.mainList.item8.text')}
            </li>
            <li style={{marginBottom: '5px'}}>
              <strong>{t('termsConditions.mainList.item9.strong')} </strong> {t('termsConditions.mainList.item9.text')}
            </li>
        </ul>
        <h2 style={{margin: '20px 0'}}>{t('termsConditions.Acknowledgment.title')}</h2>
        <p>{t('termsConditions.Acknowledgment.text1')}</p>
        <p>{t('termsConditions.Acknowledgment.text2')}</p>
        <p>{t('termsConditions.Acknowledgment.text3')}</p>
        <h2 style={{margin: '20px 0'}}>{t('termsConditions.LinkToWeb.title')}</h2>
        <p>{t('termsConditions.LinkToWeb.text')}</p>
        <h2 style={{margin: '20px 0'}}>{t('termsConditions.Termination.title')}</h2>
        <p>{t('termsConditions.Termination.text')}</p>
        <h2 style={{margin: '20px 0'}}>{t('termsConditions.LimLiab.title')}</h2>
        <p>{t('termsConditions.LimLiab.text')}</p>
        <h2 style={{margin: '20px 0'}}>{t('termsConditions.AsIs.title')} </h2>
        <h2>{t('termsConditions.AsIs.item1.name')}</h2>
        <p>{t('termsConditions.AsIs.item1.text')}</p>
        <h2 style={{marginTop: '10px'}}>{t('termsConditions.AsIs.item2.name')}</h2>
        <p>{t('termsConditions.AsIs.item2.text')}</p>
        <h2 style={{marginTop: '10px'}}>{t('termsConditions.AsIs.item3.name')}</h2>
        <p>{t('termsConditions.AsIs.item3.text')}</p>
        <h2 style={{marginTop: '10px'}}>{t('termsConditions.AsIs.item4.name')}</h2>
        <p>{t('termsConditions.AsIs.item4.text')}</p>
        <h2 style={{marginTop: '10px'}}>{t('termsConditions.AsIs.item5.name')}</h2>
        <p>{t('termsConditions.AsIs.item5.text')}</p>
        <h2 style={{marginTop: '10px'}}>{t('termsConditions.sevWaiv.title')}</h2>
        <h2 style={{marginTop: '10px'}}>{t('termsConditions.sevWaiv.item1.name')}</h2>
        <p>{t('termsConditions.sevWaiv.item1.text')}</p>
        <h2 style={{marginTop: '10px'}}>{t('termsConditions.sevWaiv.item2.name')}</h2>
        <p>{t('termsConditions.sevWaiv.item2.text')}</p>
        <h2 style={{marginTop: '10px'}}>{t('termsConditions.sevWaiv.item3.name')}</h2>
        <p>{t('termsConditions.sevWaiv.item3.text')}</p>
        <h2 style={{marginTop: '10px'}}>{t('termsConditions.sevWaiv.item4.name')}</h2>
        <p>{t('termsConditions.sevWaiv.item4.text')}</p>
        <h2 style={{marginTop: '10px'}}>{t('termsConditions.sevWaiv.item5.name')}</h2>
        <p>{t('termsConditions.sevWaiv.item5.text1')}</p>
        <p>{t('termsConditions.sevWaiv.item5.text2')}</p>
        <p>{t('termsConditions.sevWaiv.item5.text3')}</p>
      </aside>
      <ContactUs />
    </div>
  );
};

export default ReturnPolicy;
