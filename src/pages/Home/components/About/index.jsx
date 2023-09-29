import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

import AboutImg from '@assets/images/about-img.png';

const About = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.layoutBg}>
      <div className={'container ' + styles.aboutContainer}>
        <div data-aos="fade-right" className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>EMGU</h2>
          <p className={styles.aboutText}>
          {t('home.emgu.text')}
          </p>
        </div>
        <img data-aos="fade-left" className={styles.aboutImage} src={AboutImg} alt='curier-img' />
      </div>
    </div>
  );
};

export default About;
