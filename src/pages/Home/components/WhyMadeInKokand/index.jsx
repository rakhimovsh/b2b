import {useEffect} from "react";
import AOS from "aos";
import styles from './styles.module.css';
import { ReactComponent as WhyIcon1 } from '@assets/svg/whyIcon1.svg';
import { ReactComponent as WhyIcon2 } from '@assets/svg/whyIcon2.svg';
import { ReactComponent as WhyIcon3 } from '@assets/svg/whyIcon3.svg';
import { ReactComponent as WhyIcon4 } from '@assets/svg/whyIcon4.svg';

const WhyMadeInKokand = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className={'container ' + styles.whyContainer}>
      <h2 className={styles.whyTitle}>Почему EMGU </h2>
      <div className={styles.whyContent}>
        <div data-aos="flip-left" className={styles.whyCard}>
          <WhyIcon1 />
          <p className={styles.whyText}>Доставка по всему миру</p>
        </div>
        <div data-aos="flip-left" className={styles.whyCard}>
          <WhyIcon2 />
          <p className={styles.whyText}>Лучшее качество</p>
        </div>
        <div data-aos="flip-left" className={styles.whyCard}>
          <WhyIcon3 />
          <p className={styles.whyText}>Лучшие предложения</p>
        </div>
        <div data-aos="flip-left" className={styles.whyCard}>
          <WhyIcon4 />
          <p className={styles.whyText}>Безопасные платежи</p>
        </div>
      </div>
    </div>
  );
};

export default WhyMadeInKokand;
