import styles from './styles.module.css';

import Box from '@assets/images/box.png';
import ContactUs from '@components/ContactUs';
import { useTranslation } from 'react-i18next';

const HowToBuyProduct = () => {
  const {t} = useTranslation()
  return (
    <div className={'container ' + styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>{t('howToBuy.title')}</h2>
          <p className={styles.desc}>
            {t('howToBuy.text')}
          </p>
          <ul className={styles.list}>
            <li className={styles.item}>{t('howToBuy.step1')}</li>
            <li className={styles.item}>
              {t('howToBuy.step2')}
            </li>
            <li className={styles.item}>
              {t('howToBuy.step3')} 
            </li>
            
          </ul>
        </div>
        <div className={styles.right}>
          <img src={Box} alt='box' width={258} />
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default HowToBuyProduct;
