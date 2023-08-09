import styles from './styles.module.css';

import AboutImg from '@assets/images/about-img.png';

const About = () => {
  return (
    <div className={styles.layoutBg}>
      <div className={'container ' + styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>Made in Kokand</h2>
          <p className={styles.aboutText}>
            Made in Kokand — это платформа, на которой производители, поставщики и покупатели могут
            найти друг друга. Используйте платформу для расширения экспорта ваших компаний и
            привлечения зарубежных покупателей. Или найдите поставщиков и продукты по всему миру и
            свяжитесь с ними бесплатно.
          </p>
        </div>
        <img className={styles.aboutImage} src={AboutImg} alt='curier-img' />
      </div>
    </div>
  );
};

export default About;
