import { useTranslation } from 'react-i18next';
import styles from './styles.module.css'

import EmptyBox from '@assets/images/empty-box.png'


const EmptyProducts = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.emptyProducts}>
      <div className={styles.emptyProducts_content}>
        <h2>
          {t('companies.empty')}
        </h2>
        <p>{t('companies.advice')}</p>
      </div>
      <img src={EmptyBox} alt='empty box'/>
    </div>
  )
};


export default EmptyProducts
