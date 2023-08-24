import styles from './styles.module.css';

import AboutImg from '@assets/images/about-img.png';

const About = () => {
  return (
    <div className={styles.layoutBg}>
      <div className={'container ' + styles.aboutContainer}>
        <div data-aos="fade-right" className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>EMGU</h2>
          <p className={styles.aboutText}>
            Export Management Group of Uzbekistan — это платформа, на которой производители, поставщики и покупатели могут
            найти друг друга. Используйте платформу для расширения экспорта ваших компаний и
            привлечения зарубежных покупателей. Или найдите поставщиков и продукты по всему миру и
            свяжитесь с ними бесплатно.
          </p>
        </div>
        <img data-aos="fade-left" className={styles.aboutImage} src={AboutImg} alt='curier-img' />
      </div>
    </div>
  );
};

export default About;
